export interface IRequestQueryParams {
  limit?: number;
  page?: number;
  sort?: Record<string, 'asc' | 'desc'>;
}
