import { Box } from '@mui/material';
import { FC } from 'react';

interface EmptyStateImageProps {}

const EmptyStateImage: FC<EmptyStateImageProps> = ({}) => {
  return (
    <Box
      component="img"
      sx={{
        width: '100%',
        objectFit: 'cover',
        aspectRatio: 1,
        margin: '0 auto',
      }}
      alt="No available data"
      src="/images/no-data.png"
    />
  );
};

export default EmptyStateImage;
