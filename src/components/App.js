import React, { useState } from 'react';
import { Entry } from './Entry.jsx';
import { HomeContainer } from './HomeContainer.jsx';
import { purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../scss/app-home.scss';
// import { Troubleshoot } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#EA6CD9',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: 15,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        filledError: {
          backgroundColor: '#EA6CD9',
        },
      }
    },
  },
});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); //switch to false after debug
  const [user, setUser] = useState('');

  const login = (bool) => {
    setLoggedIn(bool);
  };
  const addUserVal = (val) => {
    setUser(val);
  };

  return (
    <ThemeProvider theme={theme}>
      {loggedIn ? (
        <HomeContainer userId={user} />
      ) : (
        <Entry login={login} userId={addUserVal} />
      )}
    </ThemeProvider>
  );
};

export default App;
