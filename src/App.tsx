import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header';
import { theme } from './theme';
import { MyRoutes } from './routes';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Header />
      <MyRoutes />
      <ToastContainer position="top-right" />
    </ThemeProvider>
  );
}
