import { CircularProgress, Box } from '@mui/material';

const LazyPageLoader = () => (
  <Box
    sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <CircularProgress />
  </Box>
);

export default LazyPageLoader;
