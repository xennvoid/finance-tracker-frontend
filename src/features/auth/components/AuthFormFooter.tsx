import { Box, Typography, Link } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router';

interface AuthFormFooterProps {
  textBelow: string;
  linkPath: string;
  linkText: string;
}

const AuthFormFooter: FC<AuthFormFooterProps> = ({ textBelow, linkPath, linkText }) => {
  return (
    <>
      <Box display="flex" alignItems="center" gap={1} justifyContent="center">
        <Typography variant="subtitle2" textTransform="capitalize">
          {textBelow}
        </Typography>
        <Link component={RouterLink} to={linkPath}>
          {linkText}
        </Link>
      </Box>
    </>
  );
};

export default AuthFormFooter;
