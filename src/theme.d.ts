import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      titlePrimary: string;
      titleSecondary: string;
      textPrimary: string;
      primaryBlue: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      titlePrimary: string;
      titleSecondary: string;
      textPrimary: string;
      primaryBlue: string;
    };
  }
}
