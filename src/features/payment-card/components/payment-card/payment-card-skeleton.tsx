import CustomCard from '@components/custom-card';
import { Box, Divider, Skeleton } from '@mui/material';
import { FC } from 'react';

interface PaymentCardSkeletonProps {}

const PaymentCardSkeleton: FC<PaymentCardSkeletonProps> = ({}) => {
  return (
    <CustomCard
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        padding: 3,
      }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ width: '30%' }}>
          <Skeleton />
          <Skeleton />
        </Box>
        <Skeleton variant="rounded" sx={{ width: 35, height: 35 }} />
      </Box>
      <Box sx={{ display: 'flex', gap: 5 }}>
        <Box sx={{ width: '30%' }}>
          <Skeleton />
          <Skeleton />
        </Box>
        <Box sx={{ width: '30%' }}>
          <Skeleton />
          <Skeleton />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton sx={{ width: '50%' }} />
          <Skeleton variant="rounded" sx={{ width: 35, height: 35 }} />
        </Box>
      </Box>
    </CustomCard>
  );
};

export default PaymentCardSkeleton;
