import { useMediaQuery, useTheme } from '@mui/material';

export const useResponsive = () => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.only('xl'));

  const isUnderMd = useMediaQuery(theme.breakpoints.down('md'));
  const isUnderLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallLaptop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)');

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isUnderMd,
    isUnderLg,
    isMobile,
    isTablet,
    isSmallLaptop,
    isLargeScreen,
    isDesktop,
    isTouchDevice,
  };
};
