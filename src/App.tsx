import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core';
import Routes from './routes';

const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#9649CB',
      },
      secondary: {
        main: '#ECEBEB',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
