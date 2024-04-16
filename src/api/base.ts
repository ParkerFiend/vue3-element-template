export type ApiResObj<T> = {
  errCode: number;
  errMsg: string;
  data: T;
};

export type ApiRes<T> = Promise<ApiResObj<T>>;

/**
 * 模拟成功的接口
 * @param data 接口数据
 */
export function mockSuccessRes(data: Recordable) {
  return () => [
    200,
    {
      errCode: 0,
      data,
    },
  ];
}
