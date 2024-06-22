import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MyHomepage from './components/MyHomepage';

const getTheme = (mode) => createTheme({
  palette: {
    mode,
  },
});

function App() {
  const [mode, setMode] = React.useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<MyHomepage mode={mode} toggleColorMode={toggleColorMode} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
