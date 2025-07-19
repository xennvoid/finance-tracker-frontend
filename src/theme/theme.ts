import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: 'Geologica, sans-serif',
    },
    palette: {
      custom: {
        titlePrimary: '#343c6a',
        titleSecondary: '#718ebf',
        textPrimary: '#232323',
        primaryBlue: '#2d60ff',
      },
      success: {
        main: '#41d4a8',
      },
      error: {
        main: '#ff4b4a',
      },
    },
  }),
);
