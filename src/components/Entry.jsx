import React, { useState } from 'react';
import { Login } from './Login.jsx';
import { Register } from './Register.jsx';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const Entry = (props) => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <Container component='main'>
      <Typography
        variant='h1'
        align='center'
        sx={{
          backgroundImage: `linear-gradient(70deg, #5514B4, #FF80FF)`,
          backgroundSize: '100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mt: 8,
          mb: 4,
        }}
      >
        c l a y d a y
      </Typography>
      {currentForm === 'login' ? (
        <Login
          onFormSwitch={toggleForm}
          login={props.login}
          userId={props.userId}
        />
      ) : (
        <Register
          onFormSwitch={toggleForm}
          login={props.login}
          userId={props.userId}
        />
      )}
    </Container>
  );
};
