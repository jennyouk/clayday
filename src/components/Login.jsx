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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

export const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonText, setButtonText] = useState('Log in');

  const defaultTheme = useTheme();


  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { username, password };
    // console.log(username, password);
    // console.log(body);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.login === true) {
          console.log('you are logged in');
          props.login(true);
        } else {
          console.log('unsuccessful');
          setButtonText('Log in unsuccessful');
          // props.onFormSwitch('register')
        }
      })
      // .then(() => {
      //   props.history.push('/');
      // })
      .catch((err) => console.log('Login error: ', err));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <div className='auth-form-container'> */}
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Typography component='h1' variant='h5'>
          welcome!
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

          {/* <label htmlFor='username'>username </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type='username'
            placeholder='username'
            id='username'
            name='username'
          />
          <label htmlFor='password'>password </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='***********'
            id='password'
            name='password'
          />
          <Button variant='outlined'>{buttonText}</Button> */}
        </Box>
        <Button
          variant="text"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => props.onFormSwitch('register')}
        >
          Don't have an account? Register here.
        </Button>
      </Container>
    </ThemeProvider>
  );
};
