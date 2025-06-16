import { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { mergeSx } from '@utils/merge-sx';

interface CustomButtonProps extends ButtonProps {}

const CustomButton: FC<CustomButtonProps> = ({ sx, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={mergeSx(
        (theme) => ({
          ...theme.typography.body1,
          fontWeight: 500,
          px: 3,
          py: 1.5,
          backgroundColor: theme.palette.custom.primaryBlue,
          borderRadius: 2,
          textTransform: 'none',
          boxShadow: 'none',
        }),
        sx,
      )}
      {...props}
    />
  );
};

export default CustomButton;
