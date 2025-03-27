import { IApiResponse, IApiResponseError } from 'types/api-response.types';

export type IRegisterResponse = IApiResponse<null> | IApiResponseError;

export interface IRegisterFormData {
  email: string;
  password: string;
}
