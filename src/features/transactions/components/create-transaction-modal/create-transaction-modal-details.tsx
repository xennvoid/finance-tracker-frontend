import { FC } from 'react';
import { Box, colors, Divider, Typography } from '@mui/material';
import { formatCurrency } from '@utils/formatters/format-currency';
import { ICard } from '@features/payment-card/types/card.types';
import { formatDayMonthYear } from '@utils/formatters/format-day-month-year';
import CreateTransactionModalDetailsRow from './create-transaction-modal-details-row';
import { ITransaction } from '@features/transactions/types/transaction.types';

interface CreateTransactionModalDetailsProps {
  card: ICard;
  amount: number;
  transactionType: ITransaction['type'];
}

const CreateTransactionModalDetails: FC<CreateTransactionModalDetailsProps> = ({
  card,
  amount,
  transactionType,
}) => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: colors.grey[100],
        overflowWrap: 'anywhere',
      }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <CreateTransactionModalDetailsRow label="Date" value={formatDayMonthYear(new Date())} />
        <CreateTransactionModalDetailsRow label="Card number" value={card.number} />
        <CreateTransactionModalDetailsRow
          label="Cardholder name"
          value={`${card.holderFirstName} ${card.holderLastName}`}
        />
        <CreateTransactionModalDetailsRow
          label="Available balance"
          value={formatCurrency(card.balance || 0, card.currency)}
        />
      </Box>
      <Divider sx={{ my: 1 }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <CreateTransactionModalDetailsRow
          label="Total amount"
          value={formatCurrency(amount || 0, card.currency)}
        />
        <CreateTransactionModalDetailsRow
          label="Balance after"
          value={formatCurrency(
            (card.balance || 0) + (transactionType === 'income' ? amount : -amount),
            card.currency,
          )}
        />
      </Box>
    </Box>
  );
};

export default CreateTransactionModalDetails;
