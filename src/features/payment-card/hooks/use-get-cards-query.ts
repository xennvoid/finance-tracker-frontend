import { useQuery } from '@tanstack/react-query';
import { getCards } from '../services/get-cards.service';

export const useGetCardsQuery = (limit?: number, page?: number) =>
  useQuery({ queryKey: ['cards', limit, page], queryFn: () => getCards(limit, page) });
