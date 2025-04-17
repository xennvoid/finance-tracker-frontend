import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface RecentTransactionsPlaceholderProps {}

const RecentTransactionsPlaceholder: FC<RecentTransactionsPlaceholderProps> = ({}) => {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ whiteSpace: 'pre-line', textAlign: 'center', fontStyle: 'italic' }}>
        {'No \nrecent \ntransactions!'}
      </Typography>
    </Box>
  );
};

export default RecentTransactionsPlaceholder;
