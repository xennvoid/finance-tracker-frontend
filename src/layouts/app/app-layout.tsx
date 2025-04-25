import { FC } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import Header from './components/header';
import StyledDrawer from './components/styled-drawer';
import Main from './components/main';
import { useToggle } from '@hooks/use-toggle';
import { useFixScrollShift } from '@hooks/use-fix-scroll-shift';

interface AppLayoutProps {}

const DRAWER_WIDTH = 250;

const AppLayout: FC<AppLayoutProps> = ({}) => {
  const { opened, toggleOpened } = useToggle();

  useFixScrollShift();

  return (
    <Box display="flex">
      <Header open={opened} onClick={toggleOpened} drawerWidth={DRAWER_WIDTH} />
      <StyledDrawer open={opened} onClick={toggleOpened} drawerWidth={DRAWER_WIDTH} />
      <Main open={opened} drawerWidth={DRAWER_WIDTH}>
        <Outlet />
      </Main>
    </Box>
  );
};

export default AppLayout;
