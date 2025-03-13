import { Box } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router';

interface AuthLayoutProps {}

const AuthLayout: FC<AuthLayoutProps> = ({}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#050a24',
        backgroundImage: "url('images/bg.png')",
        minHeight: '100vh',
        backgroundSize: 'cover',
      }}>
      <Box
        component="img"
        src="/vite.svg"
        alt="Logo"
        width={150}
        height={50}
        position="absolute"
        top={50}
        left={0}
        sx={{
          userSelect: 'none',
        }}
      />
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
