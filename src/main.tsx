import { createRoot } from 'react-dom/client'
import './assets/css/desktop.css'
import './assets/css/responsive.css'
import App from './App.tsx'
import {BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { theme } from './Theme';
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'

function ProtectedLayout() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('ltkn') !== null;
  
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <Router>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ProtectedLayout />} />
        </Routes>
      </SnackbarProvider>
    </ThemeProvider>
  </Router>,
)
