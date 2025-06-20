import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins', 
      'sans-serif'
    ].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 300,
    fontWeightMedium: 300,
    fontWeightBold: 700,
    
  },
  palette: {
    primary: {
      light: '#3C97D3',
      main: '#3C97D3',
      dark: '#3C97D3',
      contrastText: '#fff',
    },
    secondary: {
      light: '#DA385B',
      main: '#DA385B',
      dark: '#DA385B',
      contrastText: '#fff',
    },
    info: {
      light: '#424242',
      main: '#424242',
      dark: '#424242',

      contrastText: '#fff',
    },
    background: {
      default: '#fafafa',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
          padding: '10px 20px',
          fontWeight: 300,
        },
      },
    },
  },
});
