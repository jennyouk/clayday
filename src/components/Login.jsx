import React, { useState } from 'react';

export const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      .then((resp) => resp.json())
      // .then((data) => {
      //   console.log('logging in with', body);
      // })
      // .then(() => {
      //   props.history.push('/');
      // })
      .catch((err) => console.log('Login error: ', err));
  };

  return (
    <div className='auth-form-container'>
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
