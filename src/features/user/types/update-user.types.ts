import { IApiResponse } from 'types/api-response.types';
import { IUser } from './user.types';

export type IUpdateUserRequestBody = Omit<IUser, 'password'>;

export type IUpdateUserResponse = IApiResponse<undefined>;

export type IUpdateUserFormFields = Omit<Required<IUser>, 'password' | 'dateOfBirth'> & {
  dateOfBirth: string;
};
