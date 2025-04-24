import { ChangeEvent, useState } from 'react';

export const usePagination = (initialPage = 1) => {
  const [page, setPage] = useState(initialPage);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return { page, setPage, handlePageChange };
};
