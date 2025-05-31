import { IApiResponse } from 'types/api-response.types';
import { IMonthlySummary } from './monthly-summary.types.';

export type IGetMonthlySummary = IApiResponse<IMonthlySummary[]>;
