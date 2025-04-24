import { useGetCardsQuery } from './use-get-cards-query';

export const useCardsData = (limit: number) => {
  const { data, isLoading } = useGetCardsQuery(limit);

  if (!data) return { data: [], isLoading };

  return { data: data.data, isLoading };
};
