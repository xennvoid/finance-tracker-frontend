import CustomCard from '@components/custom-card';
import { Box, Typography, useTheme } from '@mui/material';
import { ROUTES } from '@routes/routes';
import { FC } from 'react';
import { Link } from 'react-router';

interface AddPaymentCardProps {}

const AddPaymentCard: FC<AddPaymentCardProps> = ({}) => {
  const { titleSecondary } = useTheme().palette.custom;

  return (
    <CustomCard
      component={Link}
      to={ROUTES.CARDS}
      sx={{
        p: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed',
        borderColor: titleSecondary,
        color: titleSecondary,
        textDecoration: 'none',
      }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2" component="p">
          +
        </Typography>
      </Box>
    </CustomCard>
  );
};

export default AddPaymentCard;
