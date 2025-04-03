import SpriteSvg from '@components/sprite-svg';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router';

interface DrawerLinkProps {
  id: string;
  text: string;
  path: string;
}

const DrawerLink: FC<DrawerLinkProps> = ({ id, text, path }) => {
  return (
    <NavLink
      to={path}
      style={{
        textDecoration: 'none',
        width: '100%',
      }}>
      {({ isActive }) => (
        <ListItem
          disablePadding
          sx={{
            py: 1,
            '::before': {
              content: '""',
              position: 'absolute',
              zIndex: 100,
              backgroundColor: '#2d60ff',
              width: isActive ? 6 : 0,
              height: 60,
              borderRadius: '0 10px 10px 0',
              marginRight: '-6px',
              transition: 'width 0.2s ease-in-out',
            },
          }}>
          <ListItemButton>
            <ListItemIcon>
              <SpriteSvg
                spritePath="/navbar-sprite"
                id={id}
                width={25}
                height={25}
                fill={isActive ? '#2d60ff' : '#B1B1B1'}
                style={{ transition: 'all 0.3s ease-in-out' }}
              />
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography
                fontSize={18}
                fontWeight={500}
                color={isActive ? '#2d60ff' : '#B1B1B1'}
                sx={{ transition: 'all 0.3s ease-in-out' }}>
                {text}
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      )}
    </NavLink>
  );
};

export default DrawerLink;
