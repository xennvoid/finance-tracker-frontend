export interface IApiResponse<T> {
  message: string;
  data: T;
}

export interface IApiResponseError {
  error: {
    errorCode: string;
    message: string;
    details: null | { field: string; message: string }[];
  };
}
