import { SxProps, Theme } from '@mui/material';

export const mergeSx = (baseSx: SxProps<Theme>, customSx?: SxProps<Theme>): SxProps<Theme> => {
  return [baseSx, ...(Array.isArray(customSx) ? customSx : customSx ? [customSx] : [])];
};
