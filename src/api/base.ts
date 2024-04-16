export type ApiResObj<T> = {
  errCode: number;
  errMsg: string;
  data: T;
};

export type ApiRes<T> = Promise<ApiResObj<T>>;
