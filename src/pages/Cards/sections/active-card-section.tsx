import { FC } from 'react';
import CommonTitleHeader from '@components/common-title-header';
import PaymentCards from '@features/payment-card/components/payment-cards';
import { useActiveCardContext } from '@contexts/active-card-context';
import AddPaymentCard from '@features/payment-card/components/payment-card/add-payment-card';

interface ActiveCardSectionProps {}

const ActiveCardSection: FC<ActiveCardSectionProps> = ({}) => {
  const { activeCard } = useActiveCardContext();

  return (
    <>
      <CommonTitleHeader titleText="Active Card" />
      {activeCard ? (
        <PaymentCards isLoading={false} cards={[activeCard]} cardsAmount={1} />
      ) : (
        <AddPaymentCard />
      )}
    </>
  );
};

export default ActiveCardSection;
