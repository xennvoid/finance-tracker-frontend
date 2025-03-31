import { IconButton, IconButtonProps } from '@mui/material';
import { FC } from 'react';

interface HighlightedIconProps extends IconButtonProps {}

const HighlightedIcon: FC<HighlightedIconProps> = ({ children, ...props }) => {
  return (
    <IconButton sx={{ bgcolor: '#f5f7fa' }} {...props}>
      {children}
    </IconButton>
  );
};

export default HighlightedIcon;
