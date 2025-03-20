import { IApiResponse } from 'types/apiResponse';

export interface ILoginResponseData {
  accessToken: string;
}

export type ILoginResponse = IApiResponse<ILoginResponseData>;

export interface ILoginFormData {
  email: string;
  password: string;
}
