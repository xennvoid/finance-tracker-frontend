import { IApiResponse } from 'types/api-response.types';
import { IDailyActivity } from './daily-activity.types';

export interface IGetWeeklyActivityParams {
  cardId: string;
}

export type IGetWeeklyActivity = IApiResponse<IDailyActivity[]>;
