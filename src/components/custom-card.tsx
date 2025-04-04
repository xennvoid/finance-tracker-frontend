import { FC } from 'react';
import { Card, CardProps } from '@mui/material';

interface CustomCardProps extends CardProps {}

const CustomCard: FC<CustomCardProps> = ({ children, sx, ...props }) => {
  return (
    <Card
      sx={{
        borderRadius: 6,
        ...sx,
      }}
      {...props}>
      {children}
    </Card>
  );
};

export default CustomCard;
