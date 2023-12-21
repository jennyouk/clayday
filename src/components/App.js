import React, { useState } from 'react';
import { Entry } from './Entry.jsx';
import { HomeContainer } from './HomeContainer.jsx';
import { purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import '../scss/app-home.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
  components: {

    MuiCssBaseline: {
      styleOverrides: {

        html: {
          // fontSize: '62.5%' /* 62.5% of 16px = 10px */,
          fontFamily: 'Poppins, sans-serif',
        },
        body: {
          margin: '0',
          // color: 'darkGrey',
          boxSizing: 'border-box',
          fontFamily: 'Poppins, sans-serif',
          // backgroundColor: '#E3E3E3',
          // backgroundImage: 'linear-gradient(49deg, #7439db, #c66fbc 48%, #f7944d)',
        },
      },
    },
  },
});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); //switch to false after debug

  const login = (bool) => {
    setLoggedIn(bool);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <div className='App'> */}
      {loggedIn ? <HomeContainer /> : <Entry login={login} />}
      {/* <h1>clay day</h1> */}
      {/* {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} */}
    </ThemeProvider>
  );
};

export default App;
