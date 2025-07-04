import { useMutation } from '@tanstack/react-query';
import { scanReceiptWithAI } from '../services/ai-receipt-scan.service';
import { toast } from 'react-toastify';

export const useAIReceiptScanMutation = () =>
  useMutation({
    mutationFn: (file: File) => scanReceiptWithAI(file),
    onError: (err) => toast.error(err.message),
  });
