export interface $ApiInfo<$Data = object, $Headers = object> {
  method: string
  body: {
    code: string
    data: $Data
  }
  headers: $Headers
}

export class Reply {
  public static success<T = any>(data: T): { code: 200; data: T } {
    return {
      code: 200,
      data,
    }
  }

  public static fail<T = any>(data: T): { code: 400; data: T } {
    return {
      code: 400,
      data,
    }
  }

  public static error<T = any>(data: T): { code: number; data: T } {
    return {
      code: -1,
      data,
    }
  }
}

// 提供一个给前端使用的插件，vite ~
export function transServerApiToClientApi() {}
