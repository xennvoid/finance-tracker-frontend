import { CssBaseline } from '@mui/material';
import Home from '@pages/Home';
import LoginPage from '@pages/Login';
import AuthLayout from '@layouts/auth-layout';
import { Route, Routes } from 'react-router';
import { ROUTES } from '@routes/routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <CssBaseline />
      <ToastContainer />
      <Routes>
        <Route index element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
