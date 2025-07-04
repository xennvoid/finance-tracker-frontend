import { axiosInstance } from '@api/axios-instance';
import { TRANSACTION_ENDPOINTS } from '@constants/api-endpoints/transaction';
import { IScanReceiptWithAIResponse } from '../types/scan-receipt-with-ai.types';

export const scanReceiptWithAI = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await axiosInstance.post<void, IScanReceiptWithAIResponse>(
    TRANSACTION_ENDPOINTS.AI_RECEIPT_SCAN,
    formData,
  );

  return response.data;
};
