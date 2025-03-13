import { CssBaseline } from '@mui/material';
import Home from '@pages/Home';
import AuthLayout from 'layouts/AuthLayout';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index element={<Home />} />
        <Route element={<AuthLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;
