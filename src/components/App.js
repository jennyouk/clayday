// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>c l a y d a y</h1>
//       </div>
//     );
//   }
// }

import React, { useState } from 'react';
// import { Login } from './Login.jsx';
// import { Register } from './Register.jsx';
import { Entry } from './Entry.jsx';
import { HomeContainer } from './HomeContainer.jsx';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import '../scss/app-home.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); //switch to false after debug

  const login = (bool) => {
    setLoggedIn(bool);
  };

  return (
    <ThemeProvider theme={theme} className='App'>
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
