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

export default function Entity<T extends ZodObject<ZodRawShape>>(
    schema: T,
): {
    new(initValue: OptionalZodType<T>): z.infer<T>
} {
    return class {
        constructor(initValue: OptionalZodType<T>) {
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
