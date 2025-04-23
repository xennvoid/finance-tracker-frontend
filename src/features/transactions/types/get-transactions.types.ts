import { IApiPaginatedResponse } from 'types/api-response.types';
import { ITransaction } from './transaction.types';
import { IRequestQueryParams } from 'types/request-query-params';

export type IGetTransactionsResponse = IApiPaginatedResponse<ITransaction[]>;

export interface IGetTransactionsQueryParams extends IRequestQueryParams {
  type?: 'income' | 'expense';
}
