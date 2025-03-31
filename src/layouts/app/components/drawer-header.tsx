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
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const DrawerHeader: FC<DrawerHeaderProps> = ({ children }) => {
  return <StyledDrawerHeader>{children}</StyledDrawerHeader>;
};

export default DrawerHeader;
