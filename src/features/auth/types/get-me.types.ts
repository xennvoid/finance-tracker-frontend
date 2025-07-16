import { IUser } from '@features/user/types/user.types';
import { IApiResponse } from 'types/api-response.types';

export type IGetMeResponse = IApiResponse<Omit<IUser, 'password'>>;
