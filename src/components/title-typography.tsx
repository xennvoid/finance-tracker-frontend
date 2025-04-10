import { Typography, TypographyProps } from '@mui/material';
import { mergeSx } from '@utils/merge-sx';
import { FC } from 'react';

interface TitleTypographyProps extends TypographyProps {}

const TitleTypography: FC<TitleTypographyProps> = ({ sx, ...props }) => {
  return (
    <Typography
      variant="h5"
      sx={mergeSx(
        (theme) => ({
          fontWeight: 600,
          color: theme.palette.custom.titlePrimary,
        }),
        sx,
      )}
      {...props}
    />
  );
};

export default TitleTypography;
