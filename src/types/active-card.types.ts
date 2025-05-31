import { ReactNode } from 'react';
import { ICard } from '@features/payment-card/types/card.types';

export type IActiveCardContextType = {
  activeCard: ICard | null;
  setActiveCard: React.Dispatch<React.SetStateAction<ICard | null>>;
} | null;

export interface IActiveCardProviderProps {
  children: ReactNode;
}
