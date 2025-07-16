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
import AppLayout from '@layouts/app/app-layout';
import Logout from '@pages/Logout';
import TransactionsPage from '@pages/Transactions';
import { ActiveCardProvider } from '@contexts/active-card-context';
import CardsPage from '@pages/Cards';
import { SidebarContextProvider } from '@contexts/sidebar-context';
import { useGetMeQuery } from '@features/auth/hooks/use-get-me-query';

function App() {
  const { currentUser } = useCurrentUserContext();

  useGetMeQuery();

  return (
    <>
      <CssBaseline />
      <ToastContainer />
      <Routes>
        <Route
          element={
            <PrivateRoute isAllowed={!!currentUser}>
              <ActiveCardProvider>
                <SidebarContextProvider>
                  <AppLayout />
                </SidebarContextProvider>
              </ActiveCardProvider>
            </PrivateRoute>
          }>
          <Route index element={<Home />} />
          <Route path={ROUTES.TRANSACTIONS} element={<TransactionsPage />} />
          <Route path={ROUTES.CARDS} element={<CardsPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
          <Route path={ROUTES.REGISTER} element={<RegisterPage />}></Route>
        </Route>
        <Route path={ROUTES.LOGOUT} element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
