import { useCurrentUserContext } from '@contexts/current-user-context';
import { FC, useEffect } from 'react';

interface LogoutPageProps {}

const LogoutPage: FC<LogoutPageProps> = ({}) => {
  const { logOutCurrentUser } = useCurrentUserContext();

  useEffect(() => {
    logOutCurrentUser();
  }, []);

  return <></>;
};

export default LogoutPage;
