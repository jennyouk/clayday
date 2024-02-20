import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const Register = (props) => {
  const [buttonText, setButtonText] = useState('Register');

  const [loginData, setLogin] = useState({
    name: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...loginData, [name]: value });
    console.log(loginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = loginData;
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
      .catch((err) => {
        setButtonText('Please fill all fields');
        console.log('Registration error: ', err);
      });
  };

  return (
      <Container component='main' maxWidth='xs'>
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
            onChange={handleChange}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='username'
            name='username'
            autoComplete='username'
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
          onClick={() => props.onFormSwitch('login')}
        >
          Already have an account? Login here.
        </Button>
      </Container>
  );
};
