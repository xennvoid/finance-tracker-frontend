import { IApiPaginatedResponse } from 'types/api-response.types';
import { ITransaction } from './transaction.types';

export type IGetTransactionsResponse = IApiPaginatedResponse<ITransaction[]>;
