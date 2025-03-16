import { FC } from 'react';
import { Button, ButtonProps, colors } from '@mui/material';

interface AuthFormButtonProps extends ButtonProps {}

const AuthFormButton: FC<AuthFormButtonProps> = ({ ...props }) => {
  return (
    <Button
      fullWidth
      type="submit"
      variant="contained"
      sx={{
        backgroundColor: colors.blue[500],
        textTransform: 'initial',
        p: 2,
        borderRadius: 2,
      }}
      {...props}
    />
  );
};

export default AuthFormButton;
