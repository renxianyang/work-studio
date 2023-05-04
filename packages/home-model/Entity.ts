import {z, ZodOptional, ZodDefault, ZodObject, ZodRawShape, ZodTypeAny} from 'zod';

// 把 default、optional 类型的变为可选
type OptionalZodType<Z extends ZodObject<ZodRawShape>,
    O extends Z['shape'] = Z['shape'],
    T = ZodDefault<ZodTypeAny> | ZodOptional<ZodTypeAny>,
    > = object & {
    [key in keyof O as O[key] extends T ? never : key]: z.infer<O[key]>
} & {
    [key in keyof O as O[key] extends T ? key : never]?: z.infer<O[key]>
}

/**
 * TODO
 * 此模型只是一个简单模型，使用受限，只能使用普通属性 + 动态属性
 * 1、普通属性写在 entity
 * 2、方法属性写在子类（可以理解为 computed）
 * 普通属性的赋值也可在子类，例如
 *
 * export class UserInfoModel extends Entity(
 *   table
 *     .pick({
 *       favContentType: true,
 *     })
 *     .extend({
 *       avatar: z.string().default(''),
 *     }),
 * ) {
 *
 *   id = 1 // 不推荐（未在 entity 声明） - 不属于设计的功能，应该没有跨端的能力。。
 *
 *   avatar = '11.png' // 普通属性赋值（已在 entity 声明）
 *
 *   // 方法属性（无需再 entity 声明）
 *   sex() {
 *     return '男'
 *   }
 * }
 *
 * new UserInfoModel({
 *   avatar: '1',
 *   id: 1, // 因为未在 entity 声明，所以报错！
 * })
 * */
export default function Entity<C extends new (...args: any[]) => any, T extends ZodObject<ZodRawShape>>(
    schema: T
): {
    new(initValue: OptionalZodType<T>): z.infer<T>
} {
    return class {
        constructor(initValue: any) {
            Object.assign(this, schema.strip().parse(initValue));
        }
    };
}

// 去除所有字符串
// type OmitType<O extends object, T = string> = {
//   [key in keyof O as O[key] extends T ? never : key]: O[key]
// } & {
//   [key in keyof O as O[key] extends T ? key : never]?: O[key]
// }
//
// interface Person {
//   a: string
//   b: string
//   c: number
//   d: boolean
// }
//
// type a1 = OmitType<Person>
// type a2 = OmitType<Person, number>
