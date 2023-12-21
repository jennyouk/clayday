import React, { useState } from 'react';
import { Login } from './Login.jsx';
import { Register } from './Register.jsx';

export const Entry = (props) => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className='Entry'>
      <h1>c l a y d a y</h1>
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} login={props.login}/>
      ) : (
        <Register onFormSwitch={toggleForm} login={props.login} />
      )}
    </div>
  );
};
