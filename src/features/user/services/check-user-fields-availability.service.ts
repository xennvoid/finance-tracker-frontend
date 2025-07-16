import { axiosInstance } from '@api/axios-instance';
import {
  ICheckUserFieldsAvailabilityRequestBody,
  ICheckUserFieldsAvailabilityResponse,
} from '../types/check-user-fields-availability.types';
import { USER_ENDPOINTS } from '@constants/api-endpoints/user';

export const checkUserFieldsAvailability = async (
  fields: ICheckUserFieldsAvailabilityRequestBody,
) => {
  const response = await axiosInstance.post<void, ICheckUserFieldsAvailabilityResponse>(
    USER_ENDPOINTS.CHECK_USER_FIELDS_AVAILABILITY,
    fields,
  );

  return response.data;
};
