import { CssBaseline } from '@mui/material';
import Home from '@pages/Home';
import LoginPage from '@pages/Login';
import AuthLayout from '@layouts/auth-layout';
import { Route, Routes } from 'react-router';
import { ROUTES } from '@routes/routes';
import { ToastContainer } from 'react-toastify';
import RegisterPage from '@pages/Register';
import { useCurrentUserContext } from '@contexts/current-user-context';
import PrivateRoute from '@routes/private-route';

function App() {
  const { currentUser } = useCurrentUserContext();

  return (
    <>
      <CssBaseline />
      <ToastContainer />
      <Routes>
        <Route element={<PrivateRoute isAllowed={!!currentUser} />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
          <Route path={ROUTES.REGISTER} element={<RegisterPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
