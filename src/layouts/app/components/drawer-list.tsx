import { List } from '@mui/material';
import { FC } from 'react';
import DrawerLink from './drawer-link';
import { menuItems } from '../data/menu-items';

interface DrawerListProps {}

const DrawerList: FC<DrawerListProps> = ({}) => {
  return (
    <List>
      {menuItems.map((item) => (
        <DrawerLink key={item.id} {...item} />
      ))}
    </List>
  );
};

export default DrawerList;
