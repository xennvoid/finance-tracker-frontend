import CommonTitleHeader from '@components/common-title-header';
import PaymentCards from '@features/payment-card/components/payment-cards';
import { useCardsData } from '@features/payment-card/hooks/use-cards-data';
import { ROUTES } from '@routes/routes';
import { FC } from 'react';

interface CardsSectionProps {}

const CARDS_AMOUNT = 2;

const CardsSection: FC<CardsSectionProps> = ({}) => {
  const { data: cards, isLoading: isLoadingCards } = useCardsData(CARDS_AMOUNT);

  return (
    <>
      <CommonTitleHeader titleText="My Cards" linkText="See All" linkTo={ROUTES.CARDS} />
      <PaymentCards isLoading={isLoadingCards} cards={cards} cardsAmount={CARDS_AMOUNT} />
    </>
  );
};

export default CardsSection;
