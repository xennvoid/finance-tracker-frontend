import { CssBaseline } from '@mui/material';
import Home from '@pages/Home';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
