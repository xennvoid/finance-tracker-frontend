import { FC } from 'react';
import PaymentCardSkeleton from './payment-card/payment-card-skeleton';
import PaymentCard from './payment-card';
import AddPaymentCard from './payment-card/add-payment-card';
import { ICard } from '../types/card.types';
import SectionContent from '@components/section-content';

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

  return (
    <SectionContent
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(auto-fit, minmax(170px, 1fr))',
          lg: 'repeat(auto-fit, minmax(350px, 1fr))',
        },
        gap: 3.75,
        gridAutoRows: '1fr',
      }}>
      {content}
    </SectionContent>
  );
};

export default PaymentCards;
