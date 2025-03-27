import RegisterForm from '@features/auth/components/register-form';
import { Box } from '@mui/material';
import { FC } from 'react';

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = ({}) => {
  return (
    <Box
      bgcolor={'white'}
      width="50%"
      marginLeft="auto"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <Box width="100%" maxWidth={400} margin="0 auto" py={6}>
        <RegisterForm />
      </Box>
    </Box>
  );
};

export default RegisterPage;
