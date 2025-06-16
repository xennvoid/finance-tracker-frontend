import { createContext, FC, PropsWithChildren, useContext } from 'react';

interface CardListPaginationContextType {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CardListPaginationContext = createContext<CardListPaginationContextType | null>(null);

export const useCardListPaginationContext = () => {
  const context = useContext(CardListPaginationContext);
  if (!context) {
    throw new Error('useCardListPagination must be used within CardListPaginationProvider');
  }
  return context;
};

interface PaginationProviderProps extends PropsWithChildren {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CardListPaginationProvider: FC<PaginationProviderProps> = ({ setPage, children }) => {
  return (
    <CardListPaginationContext.Provider value={{ setPage }}>
      {children}
    </CardListPaginationContext.Provider>
  );
};
