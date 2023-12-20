import React, { useState } from 'react';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, email, pass };
    console.log(name, email, pass);
    fetch('http://localhost:3000/register', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'Application/JSON',
        // Accept: 'application/json',
        // 'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(body),
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
      <form className='register-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='name'
          placeholder='Your Name'
          id='name'
          name='name'
        />
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
        <button>Register</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('login')}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
