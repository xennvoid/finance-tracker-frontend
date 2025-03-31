import { AppBar, colors, AppBarProps as MuiAppBarProps, styled } from '@mui/material';

interface AppBarProps extends MuiAppBarProps {
  open: boolean;
  drawerWidth: number;
}

export const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  color: '#000',
  backgroundColor: '#fff',
  boxShadow: 'none',
  border: `1px solid ${colors.indigo['50']}`,
  borderLeft: 'none',
  ...theme.mixins.toolbar,

  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
