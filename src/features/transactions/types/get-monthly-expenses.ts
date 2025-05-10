import { IApiResponse } from 'types/api-response.types';
import { IMonthlyExpense } from './expenses.types';

export type IGetMonthlyExpenses = IApiResponse<IMonthlyExpense[]>;
