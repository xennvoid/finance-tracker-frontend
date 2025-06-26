import { axiosInstance } from '@api/axios-instance';
import { CARD_ENDPOINTS } from '@constants/api-endpoints/card';
import { IAddCardRequestBody, IAddCardResponse } from '../types/add-card.types';

export const addCard = async (newCard: IAddCardRequestBody) => {
  const response = await axiosInstance.post<void, IAddCardResponse>(CARD_ENDPOINTS.CARDS, newCard);
  return response;
};
