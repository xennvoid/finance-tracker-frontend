export interface IApiResponse<T> {
  success: true;
  message: string;
  data: T;
}

export interface IApiResponseError {
  success: false;
  error: {
    errorCode: string;
    message: string;
    details: null | { field: string; message: string }[];
  };
}
