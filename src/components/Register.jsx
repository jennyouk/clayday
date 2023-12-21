import React, { useState } from 'react';
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

export const Register = (props) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [buttonText, setButtonText] = useState('Register');

  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, username, password };
    // console.log(name, username, password);
    // console.log(body);
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('logging in with', body);
        props.login(true);
        props.userId(res.userId);
      })
      // .then(() => {
      //   props.history.push('/');
      // })
      .catch((err) => {
        setButtonText('Please fill all fields');
        console.log('Registration error: ', err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Typography component='h1' variant='h6' color='grey.700' align='right'>
          get messy with us
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='name'
            label='name'
            name='name'
            autoComplete='name'
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='username'
            name='username'
            autoComplete='username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 1 }}
          >
            {buttonText}
          </Button>
        </Box>
        <Button
          variant='text'
          fullWidth
          sx={{ mt: 0, mb: 2 }}
          onClick={() => props.onFormSwitch('login')}
        >
          Already have an account? Login here.
        </Button>
      </Container>
    </ThemeProvider>
  );
};
