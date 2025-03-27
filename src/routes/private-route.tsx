import { FC, ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router';
import { ROUTES } from './routes';

interface PrivateRouteProps {
  isAllowed: boolean;
  children?: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ isAllowed, children }) => {
  if (!isAllowed) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
