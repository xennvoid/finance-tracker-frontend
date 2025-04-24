import SpriteSvg from '@components/sprite-svg';
import { Avatar, Box, colors, Typography } from '@mui/material';
import { FC } from 'react';
import { ITransaction } from '../types/transaction.types';
import { formatDayMonthYear } from '@utils/formatters/format-day-month-year';
import { formatCurrency } from '@utils/formatters/format-currency';

interface RecentTransactionProps extends ITransaction {}

const RecentTransaction: FC<RecentTransactionProps> = ({ text, type, amount, createdAt, card }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
      <Avatar sx={{ backgroundColor: '#e7edff', width: 55, height: 55 }}>
        <SpriteSvg
          spritePath="/transaction-sprite"
          id="transaction"
          fill={type === 'income' ? colors.green[900] : colors.red[800]}
        />
      </Avatar>
      <Box sx={{ flex: 1 }}>
        <Typography sx={(theme) => ({ fontWeight: 500, color: theme.palette.custom.textPrimary })}>
          {text}
        </Typography>
        <Typography
          variant="body2"
          sx={(theme) => ({ color: theme.palette.custom.titleSecondary })}>
          {formatDayMonthYear(createdAt)}
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: 500, color: type === 'income' ? '#41d4a8' : '#ff4b4a' }}>
        {type === 'income' ? '+' : '-'}
        {formatCurrency(amount, card.currency)}
      </Typography>
    </Box>
  );
};

export default RecentTransaction;
