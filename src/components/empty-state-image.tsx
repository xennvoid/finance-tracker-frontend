import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

interface EmptyStateImageProps extends BoxProps<'img'> {}

const EmptyStateImage: FC<EmptyStateImageProps> = (props) => {
  const { sx, ...others } = props;

  return (
    <Box
      component="img"
      sx={{
        maxHeight: 350,
        maxWidth: '100%',
        objectFit: 'cover',
        aspectRatio: 1,
        margin: '0 auto',
        ...sx,
      }}
      alt="No available data"
      src="/images/no-data.png"
      {...others}
    />
  );
};

export default EmptyStateImage;
