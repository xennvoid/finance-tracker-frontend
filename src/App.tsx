import { CssBaseline } from '@mui/material';
import LoginPage from '@pages/Login';
import AuthLayout from '@layouts/auth-layout';
import { Route, Routes, useLocation } from 'react-router';
import { ROUTES } from '@routes/routes';
import { ToastContainer } from 'react-toastify';
import RegisterPage from '@pages/Register';
import { useCurrentUserContext } from '@contexts/current-user-context';
import PrivateRoute from '@routes/private-route';
import AppLayout from '@layouts/app/app-layout';
import Logout from '@pages/Logout';
import { ActiveCardProvider } from '@contexts/active-card-context';
import { SidebarContextProvider } from '@contexts/sidebar-context';
import { useGetMeQuery } from '@features/auth/hooks/use-get-me-query';
import { Suspense } from 'react';
import LazyPageLoader from '@components/lazy-page-loader';
import { lazyRoutes } from '@routes/lazy-routes';

function App() {
  const { currentUser } = useCurrentUserContext();

  const location = useLocation();
  const isPublicRoute = [ROUTES.LOGIN, ROUTES.REGISTER, ROUTES.LOGOUT].includes(location.pathname);

  useGetMeQuery(!isPublicRoute);

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
          {lazyRoutes.map((route, idx) => (
            <Route
              key={idx}
              index={route.index}
              path={route.path}
              element={
                <Suspense fallback={<LazyPageLoader />}>
                  <route.element />
                </Suspense>
              }
            />
          ))}
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
