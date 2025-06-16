import { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { mergeSx } from '@utils/merge-sx';

interface CustomTextButtonProps extends ButtonProps {}

const CustomTextButton: FC<CustomTextButtonProps> = (props) => {
  const { sx, ...other } = props;

  return (
    <Button
      disableRipple
      sx={mergeSx(
        (theme) => ({
          ...theme.typography.body1,
          justifySelf: 'flex-end',
          color: theme.palette.custom.primaryBlue,
          fontWeight: 500,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'unset',
          },
        }),
        sx,
      )}
      {...other}
    />
  );
};

export default CustomTextButton;
