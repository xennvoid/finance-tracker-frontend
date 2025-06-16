import { FC, MouseEvent, useState } from 'react';
import { ICard } from '@features/payment-card/types/card.types';
import { List } from '@mui/material';
import PaymentCardPreview from '.';
import { useActiveCardContext } from '@contexts/active-card-context';

interface PaymentCardsPreviewListProps {
  data: ICard[];
}

const PaymentCardsPreviewList: FC<PaymentCardsPreviewListProps> = ({ data }) => {
  const { activeCard, setActiveCard } = useActiveCardContext();
  const [openedCardId, setOpenedCardId] = useState<string | null>(null);

  const handleSelectCard = (_: MouseEvent<HTMLElement>, card: ICard) => {
    setActiveCard(card);
  };

  return (
    <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      {data.map((card) => (
        <PaymentCardPreview
          key={card._id}
          card={card}
          handleSelectCard={handleSelectCard}
          isActive={card._id === activeCard?._id}
          isOpened={card._id === openedCardId}
          setOpenedCardId={setOpenedCardId}
        />
      ))}
    </List>
  );
};

export default PaymentCardsPreviewList;
