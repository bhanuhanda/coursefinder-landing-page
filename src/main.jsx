import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme({
      typography: {
        fontFamily: 'Monsterrat, sans-serif',
      }
    })}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
