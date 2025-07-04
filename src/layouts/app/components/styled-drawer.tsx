import { Drawer } from '@mui/material';
import { FC } from 'react';
import DrawerHeader from './drawer-header';
import DrawerList from './drawer-list';
import SpriteSvg from '@components/sprite-svg';
import HighlightedIcon from './highlighted-icon';
import { pathTitles } from '../data/path-titles';
import { useLocation } from 'react-router';
import { useResponsive } from '@hooks/use-responsive';
import TitleTypography from '@components/title-typography';

interface StyledDrawerProps {
  open: boolean;
  onClick: () => void;
  drawerWidth: number;
}

const StyledDrawer: FC<StyledDrawerProps> = ({ open, onClick, drawerWidth }) => {
  const { pathname } = useLocation();
  const title = pathTitles[pathname] || 'Overview';

  const { isUnderMd } = useResponsive();

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
      {isUnderMd && (
        <TitleTypography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          {title}
        </TitleTypography>
      )}
      <DrawerList />
    </Drawer>
  );
};

export default StyledDrawer;
