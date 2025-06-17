import { axiosInstance } from '@api/axios-instance';
import { CARD_ENDPOINTS } from '@constants/api-endpoints/card';
import { IDeleteCardResponse } from '../types/delete-card.types';

export const deleteCard = async (cardId: string) => {
  const response = await axiosInstance.delete<void, IDeleteCardResponse>(
    CARD_ENDPOINTS.CARDS + `/${cardId}`,
  );
  return response;
};
