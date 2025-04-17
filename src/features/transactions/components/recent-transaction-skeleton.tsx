import { Box, Skeleton, Typography } from '@mui/material';
import { FC } from 'react';

interface RecentTransactionSkeletonProps {}

const RecentTransactionSkeleton: FC<RecentTransactionSkeletonProps> = ({}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
      <Skeleton variant="circular" sx={{ width: { xs: 40, md: 55 }, height: { xs: 40, md: 55 } }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Skeleton>
          <Typography sx={{ visibility: 'hidden' }}>Food at restaurant</Typography>
        </Skeleton>
        <Skeleton>
          <Typography variant="body2" sx={{ visibility: 'hidden' }}>
            1 January 2000
          </Typography>
        </Skeleton>
      </Box>
      <Skeleton>
        <Typography sx={{ visibility: 'hidden' }}>+ 1000 $</Typography>
      </Skeleton>
    </Box>
  );
};

export default RecentTransactionSkeleton;
