import { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface CreateTransactionModalDetailsRowProps {
  label: string;
  value: string;
}

const CreateTransactionModalDetailsRow: FC<CreateTransactionModalDetailsRowProps> = ({
  label,
  value,
}) => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <Typography variant="body2" sx={(theme) => ({ color: theme.palette.custom.titleSecondary })}>
        {label}
      </Typography>
      <Typography variant="body2" sx={(theme) => ({ color: theme.palette.custom.textPrimary })}>
        {value}
      </Typography>
    </Box>
  );
};

export default CreateTransactionModalDetailsRow;
