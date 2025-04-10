export interface IApiResponse<T> {
  message: string;
  data: T;
}

export interface IApiPaginatedResponse<T> {
  message: string;
  data: T;
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}

export interface IApiResponseError {
  error: {
    errorCode: string;
    message: string;
    details: null | { field: string; message: string }[];
  };
}
