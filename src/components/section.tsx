import { Box, SxProps } from '@mui/material';
import { FC, ReactNode } from 'react';
import TitleTypography from './title-typography';
import LinkTypography from './link-typography';

type SectionProps =
  | {
      titleText?: string;
      children?: ReactNode;
      sectionSx?: SxProps;
      contentContainerSx?: SxProps;
      linkText: string;
      linkTo: string;
    }
  | {
      titleText?: string;
      children?: ReactNode;
      sectionSx?: SxProps;
      contentContainerSx?: SxProps;
      linkText?: undefined;
      linkTo?: undefined;
    };

const Section: FC<SectionProps> = ({
  titleText,
  linkText,
  linkTo,
  children,
  sectionSx,
  contentContainerSx,
}) => {
  return (
    <Box component="section" sx={{ display: 'flex', flexDirection: 'column', ...sectionSx }}>
      {(titleText || linkText) && (
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
          {titleText && <TitleTypography>{titleText}</TitleTypography>}
          {linkText && <LinkTypography to={linkTo}>{linkText}</LinkTypography>}
        </Box>
      )}
      <Box
        sx={{
          flex: 1,
          ...contentContainerSx,
        }}>
        {children}
      </Box>
    </Box>
  );
};

export default Section;
