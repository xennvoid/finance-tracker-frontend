import { Box } from '@mui/material';
import { FC } from 'react';
import TitleTypography from './title-typography';
import LinkTypography from './link-typography';

type CommonTitleHeaderProps =
  | {
      titleText: string;
      linkText: string;
      linkTo: string;
    }
  | {
      titleText?: string;
      linkText?: undefined;
      linkTo?: undefined;
    };

const CommonTitleHeader: FC<CommonTitleHeaderProps> = ({ titleText, linkText, linkTo }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: {
          xs: 1.5,
          md: 2,
          lg: 2.5,
        },
      }}>
      <TitleTypography>{titleText}</TitleTypography>
      {linkText && <LinkTypography to={linkTo}>{linkText}</LinkTypography>}
    </Box>
  );
};

export default CommonTitleHeader;
