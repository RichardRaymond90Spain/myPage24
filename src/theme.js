// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    custom: {
      darkText: '#1D1D1D',
      mediumText: '#4E4E4E',
      lightText: '#6E6E6E',
    },
  },
});

export default theme;
