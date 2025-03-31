import { Drawer } from '@mui/material';
import { FC } from 'react';
import DrawerHeader from './drawer-header';
import DrawerList from './drawer-list';
import SpriteSvg from '@components/SpriteSvg';
import HighlightedIcon from './highlighted-icon';

interface StyledDrawerProps {
  open: boolean;
  onClick: () => void;
  drawerWidth: number;
}

const StyledDrawer: FC<StyledDrawerProps> = ({ open, onClick, drawerWidth }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}>
      <DrawerHeader>
        <HighlightedIcon onClick={onClick}>
          <SpriteSvg
            spritePath="/navbar-sprite"
            id="menu-close"
            width={25}
            height={25}
            fill="#000"
          />
        </HighlightedIcon>
      </DrawerHeader>
      <DrawerList />
    </Drawer>
  );
};

export default StyledDrawer;
