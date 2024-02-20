import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const Login = (props) => {
  const [buttonText, setButtonText] = useState('Log in');

  const [loginData, setLogin] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = loginData;
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
          props.userId(res.userId);
        } else {
          console.log('unsuccessful');
          setButtonText('Log in unsuccessful');
        }
      })
      .catch((err) => console.log('Login error: ', err));
  };

  return (
      <Container component='main' maxWidth='xs'>
        <Typography component='h1' variant='h6' color='grey.700' align='center'>
          welcome!
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='username'
            name='username'
            autoComplete='username'
            autoFocus
            onChange={handleChange}
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
            onChange={handleChange}
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
          onClick={() => props.onFormSwitch('register')}
        >
          Don't have an account? Register here.
        </Button>
      </Container>
  );
};
