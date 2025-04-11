import { styled } from '@mui/material';
import { FC, ReactNode } from 'react';

interface DrawerHeaderProps {
  children?: ReactNode;
}

const StyledDrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  [theme.breakpoints.up('xs')]: {
    minHeight: 120,
  },
  [theme.breakpoints.up('sm')]: {
    minHeight: 85,
  },
  [theme.breakpoints.up('md')]: {
    minHeight: 95,
  },
  justifyContent: 'flex-end',
}));

const DrawerHeader: FC<DrawerHeaderProps> = ({ children }) => {
  return <StyledDrawerHeader>{children}</StyledDrawerHeader>;
};

export default DrawerHeader;
