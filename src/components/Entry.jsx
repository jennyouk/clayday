import React, { useState } from 'react';
import { Login } from './Login.jsx';
import { Register } from './Register.jsx';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

export const Entry = (props) => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component='main'>
        <CssBaseline />
        <Typography
          variant='h1'
          align='center'
          // color='grey.700'
          sx={{
            // backgroundcolor: 'primary',
            backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
            backgroundSize: '100%',
            // backgroundRepeat: 'repeat',
            // backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mt: 3,
            mb: 10,
          }}
        >
          c l a y d a y
        </Typography>
        {currentForm === 'login' ? (
          <Login onFormSwitch={toggleForm} login={props.login} />
        ) : (
          <Register onFormSwitch={toggleForm} login={props.login} />
        )}
      </Container>
    </ThemeProvider>
  );
};
