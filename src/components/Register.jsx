import React, { useState } from 'react';

export const Register = (props) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

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
      .then((resp) => resp.json())
      // .then((data) => {
      //   console.log('logging in with', body);
      // })
      // .then(() => {
      //   props.history.push('/');
      // })
      .catch((err) => console.log('Registration error: ', err));
  };

  return (
    <div className='auth-form-container'>
      <form className='register-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>name </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='name'
          placeholder='Your Name'
          id='name'
          name='name'
        />
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
        <button>Register</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('login')}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
