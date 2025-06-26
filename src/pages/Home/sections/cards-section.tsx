import CommonTitleHeader from '@components/common-title-header';
import SectionContent from '@components/section-content';
import PaymentCards from '@features/payment-card/components/payment-cards';
import { useCardsData } from '@features/payment-card/hooks/use-cards-data';
import { ROUTES } from '@routes/routes';
import { FC } from 'react';

interface CardsSectionProps {}

const CARDS_AMOUNT = 2;

const CardsSection: FC<CardsSectionProps> = ({}) => {
  const { data: cards, isLoading: isLoadingCards } = useCardsData({ limit: CARDS_AMOUNT });

  return (
    <>
      <CommonTitleHeader titleText="My Cards" linkText="See All" linkTo={ROUTES.CARDS} />
      <SectionContent
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(auto-fit, minmax(230px, 1fr))',
            lg: 'repeat(auto-fit, minmax(350px, 1fr))',
          },
          gap: 3.75,
          gridAutoRows: '1fr',
        }}>
        <PaymentCards isLoading={isLoadingCards} cards={cards} cardsAmount={CARDS_AMOUNT} />
      </SectionContent>
    </>
  );
};

export default CardsSection;
