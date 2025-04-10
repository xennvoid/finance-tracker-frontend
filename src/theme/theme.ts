import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      custom: { titlePrimary: '#343c6a', titleSecondary: '#718ebf', textPrimary: '#232323' },
    },
  }),
);
