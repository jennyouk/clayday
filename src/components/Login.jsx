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

const defaultTheme = createTheme();

export const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonText, setButtonText] = useState('Log in');

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
          Sign in
        </Typography>
        <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor='username'>username </label>
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
          <Button variant='outlined'>{buttonText}</Button>
        </form>
        <button
          className='link-btn'
          onClick={() => props.onFormSwitch('register')}
        >
          Don't have an account? Register here.
        </button>
      </Container>
    </ThemeProvider>
  );
};
