import PaymentCards from '@features/payment-card/components/payment-cards';
import { FC } from 'react';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <>
      <PaymentCards />
    </>
  );
};

export default Home;
