import { FC } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import Header from './components/header';
import StyledDrawer from './components/styled-drawer';
import Main from './components/main';
import { useFixScrollShift } from '@hooks/use-fix-scroll-shift';
import { useSidebarContext } from '@contexts/sidebar-context';

interface AppLayoutProps {}

const DRAWER_WIDTH = 250;

const AppLayout: FC<AppLayoutProps> = ({}) => {
  const { isOpened, toggleSideBar } = useSidebarContext();
  useFixScrollShift();

  return (
    <Box display="flex">
      <Header open={isOpened} onClick={toggleSideBar} drawerWidth={DRAWER_WIDTH} />
      <StyledDrawer open={isOpened} onClick={toggleSideBar} drawerWidth={DRAWER_WIDTH} />
      <Main open={isOpened} drawerWidth={DRAWER_WIDTH}>
        <Outlet />
      </Main>
    </Box>
  );
};

export default AppLayout;
