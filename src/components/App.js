import React, { useState } from 'react';
import { Entry } from './Entry.jsx';
import { HomeContainer } from './HomeContainer.jsx';
import { purple, pink } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../scss/app-home.scss';
import { Troubleshoot } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
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
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     '@font-face': {
    //       fontFamily: 'Poppins',
    //       // src: `url('https://fonts.googleapis.com/css2?family=Poppins&display=swap') format("truetype")`
    //     },
    //     // html: {
    //     // fontSize: '62.5%' /* 62.5% of 16px = 10px */,
    //     // fontFamily: 'Poppins, sans-serif',
    //     // },
    //     // body: {
    //     // margin: '0',
    //     // color: 'darkGrey',
    //     // boxSizing: 'border-box',
    //     // fontFamily: 'Poppins, sans-serif',
    //     // backgroundColor: '#E3E3E3',
    //     // backgroundImage: 'linear-gradient(49deg, #7439db, #c66fbc 48%, #f7944d)',
    //     // },
    //   },
    // },
  },
});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true); //switch to false after debug
  const [user, setUser] = useState('');

  const login = (bool) => {
    setLoggedIn(bool);
  };
  const addUserVal = (val) => {
    setUser(val);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loggedIn ? (
        <HomeContainer userId={user} />
      ) : (
        <Entry login={login} userId={addUserVal} />
      )}
    </ThemeProvider>
  );
};

export default App;
