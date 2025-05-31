import { useCardsData } from '@features/payment-card/hooks/use-cards-data';
import { ICard } from '@features/payment-card/types/card.types';
import { createContext, useContext, useEffect, useState } from 'react';
import { IActiveCardContextType, IActiveCardProviderProps } from 'types/active-card.types';

const ActiveCardContext = createContext<IActiveCardContextType>(null);

export const ActiveCardProvider = ({ children }: IActiveCardProviderProps) => {
  const { data } = useCardsData(1);
  const [activeCard, setActiveCard] = useState<ICard | null>(null);

  useEffect(() => {
    if (data[0]) {
      setActiveCard(data[0]);
    }
  }, [data]);

  return (
    <ActiveCardContext.Provider value={{ activeCard, setActiveCard }}>
      {children}
    </ActiveCardContext.Provider>
  );
};

export const useActiveCardContext = () => {
  const activeCardContext = useContext(ActiveCardContext);

  if (!activeCardContext) {
    throw new Error('useActiveCardContext has to be used within <ActiveCardContext.Provider>');
  }

  return activeCardContext;
};
