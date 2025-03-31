import { FC, ReactNode } from 'react';
import DrawerHeader from './drawer-header';
import { StyledMain } from './styled-main';

interface MainProps {
  children: ReactNode;
  open: boolean;
  drawerWidth: number;
}

const Main: FC<MainProps> = ({ children, open, drawerWidth }) => {
  return (
    <StyledMain open={open} drawerWidth={drawerWidth}>
      <DrawerHeader />
      {children}
    </StyledMain>
  );
};

export default Main;
