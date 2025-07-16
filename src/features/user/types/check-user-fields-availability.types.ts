import { IApiResponse } from 'types/api-response.types';
import { IUser } from './user.types';

export type ICheckUserFieldsAvailabilityRequestBody = Pick<IUser, 'email' | 'userName'>;

export type ICheckUserFieldsAvailabilityResponse = IApiResponse<
  Record<keyof ICheckUserFieldsAvailabilityRequestBody, boolean>
>;
