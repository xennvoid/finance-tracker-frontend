import { useQuery } from '@tanstack/react-query';
import { getMe } from '../services/get-me.service';
import { useEffect } from 'react';
import { useCurrentUserContext } from '@contexts/current-user-context';
import { saveCurrentUser } from '../services/user-storage.service';

export const useGetMeQuery = () => {
  const { setCurrentUser } = useCurrentUserContext();

  const query = useQuery({
    queryKey: ['me'],
    queryFn: () => getMe(),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (query.data) {
      saveCurrentUser(query.data);
      setCurrentUser(query.data);
    }
  }, [query.data]);

  return query;
};
