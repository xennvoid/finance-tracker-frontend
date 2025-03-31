import { Toolbar, Typography, Box } from '@mui/material';
import { FC } from 'react';
import SpriteSvg from '@components/SpriteSvg';
import HighlightedIcon from './highlighted-icon';
import { StyledAppBar } from './styled-app-bar';
import { useLocation } from 'react-router';
import { pathTitles } from '../data/path-titles';

interface HeaderProps {
  open: boolean;
  onClick: () => void;
  drawerWidth: number;
}

const Header: FC<HeaderProps> = ({ open, drawerWidth, onClick }) => {
  const { pathname } = useLocation();

  const title = pathTitles[pathname] || 'Overview';

  return (
    <StyledAppBar position="fixed" open={open} drawerWidth={drawerWidth}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center" gap={2}>
          {!open && (
            <HighlightedIcon onClick={onClick}>
              <SpriteSvg
                spritePath="/navbar-sprite"
                id="menu-open"
                width={25}
                height={25}
                fill="#000"
              />
            </HighlightedIcon>
          )}
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Box display="flex" gap={1}>
          <HighlightedIcon>
            <SpriteSvg
              spritePath="/navbar-sprite"
              id="settings-empty"
              width={25}
              height={25}
              fill="#718EBF"
            />
          </HighlightedIcon>
          <HighlightedIcon>
            <SpriteSvg
              spritePath="/navbar-sprite"
              id="user"
              width={25}
              height={25}
              fill="#718EBF"
            />
          </HighlightedIcon>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
