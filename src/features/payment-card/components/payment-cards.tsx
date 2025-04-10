import { FC } from 'react';
import PaymentCardSkeleton from './payment-card/payment-card-skeleton';
import PaymentCard from './payment-card';
import AddPaymentCard from './payment-card/add-payment-card';
import { ICard } from '../types/card.types';

interface PaymentCardsProps {
  isLoading: boolean;
  cards: ICard[];
  cardsAmount: number;
}

const PaymentCards: FC<PaymentCardsProps> = ({ isLoading, cards, cardsAmount }) => {
  if (isLoading) {
    return (
      <>
        {Array.from({ length: cardsAmount }).map((_, idx) => (
          <PaymentCardSkeleton key={idx} />
        ))}
      </>
    );
  }

  return (
    <>
      {cards.map((card, idx) => (
        <PaymentCard key={idx} {...card} />
      ))}
      {!isLoading &&
        Array.from({ length: cardsAmount - cards.length }).map((_, idx) => (
          <AddPaymentCard key={idx} />
        ))}
    </>
  );
};

export default PaymentCards;
