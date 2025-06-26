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
  let content = null;

  if (isLoading) {
    content = Array.from({ length: cardsAmount }).map((_, idx) => (
      <PaymentCardSkeleton key={idx} />
    ));
  } else {
    content = [
      ...cards.map((card, idx) => <PaymentCard key={idx} {...card} />),
      ...Array.from({ length: cardsAmount - cards.length }).map((_, idx) => (
        <AddPaymentCard key={cards.length + idx} />
      )),
    ];
  }

  return content;
};

export default PaymentCards;
