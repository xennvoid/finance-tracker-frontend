import { ChangeEvent, useRef } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { ICreateTransactionFormFields } from '../types/create-transaction.types';
import { useAIReceiptScanMutation } from './use-ai-receipt-scan-mutation';

export const useAIReceiptScan = (setValue: UseFormSetValue<ICreateTransactionFormFields>) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const { isPending, mutateAsync } = useAIReceiptScanMutation();

  const scanReceiptWithAI = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      const res = await mutateAsync(file);

      setValue('description', res.description);
      setValue('amount', res.amount);
      setValue('text', res.text);
    } catch {}

    if (fileRef.current) {
      fileRef.current.value = '';
    }
  };

  const handleScanClick = () => {
    fileRef.current?.click();
  };

  return { fileRef, scanReceiptWithAI, handleScanClick, isScanningReceipt: isPending };
};
