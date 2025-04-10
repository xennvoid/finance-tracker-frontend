import { ElementType } from 'react';
import { Card, CardProps } from '@mui/material';

type CustomCardProps<C extends ElementType> = CardProps<C, { component?: C }>;

const CustomCard = <C extends ElementType = typeof Card>(props: CustomCardProps<C>) => {
  const { children, sx, ...others } = props;

  return (
    <Card
      sx={{
        borderRadius: 6,
        ...sx,
      }}
      {...others}>
      {children}
    </Card>
  );
};

export default CustomCard;
