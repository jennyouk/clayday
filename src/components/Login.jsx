import React, { useState } from 'react';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { email, pass } = body;
    console.log(email, pass);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ email, pass }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('logging in with', data);
      })
      .then(() => {
        props.history.push('/');
      })
      .catch((err) => console.log('Login error: ', err));
  };

  return (
    <div className='auth-form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>email </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='youremail@email.com'
          id='email'
          name='email'
        />
        <label htmlFor='password'>password </label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type='password'
          placeholder='***********'
          id='password'
          name='password'
        />
        <button>Log In</button>
      </form>
      <button
        className='link-btn'
        onClick={() => props.onFormSwitch('register')}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
