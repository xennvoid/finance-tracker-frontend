import { CssBaseline } from '@mui/material';
import Home from '@pages/Home';
import LoginPage from '@pages/Login';
import AuthLayout from '@layouts/AuthLayout';
import { Route, Routes } from 'react-router';
import { ROUTES } from '@routes/routes';

function App() {
  return (
    <>
      <CssBaseline />
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
