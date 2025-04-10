import { useCurrentUserContext } from '@contexts/current-user-context';
import { ROUTES } from '@routes/routes';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router';

interface LogoutPageProps {}

const LogoutPage: FC<LogoutPageProps> = ({}) => {
  const { logOutCurrentUser } = useCurrentUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    logOutCurrentUser();
    navigate(ROUTES.LOGIN);
  }, []);

  return <></>;
};

export default LogoutPage;
