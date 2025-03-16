import { Box, Paper } from '@mui/material';
import LoginForm from '@features/auth/components/LoginForm';
import { FC } from 'react';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
      <Paper elevation={5} sx={{ maxWidth: 540, borderRadius: 6, width: '100%' }}>
        <Box maxWidth={400} margin="0 auto" py={6}>
          <LoginForm />
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
