import React, { useState } from 'react';
import { Reminders } from './Reminders.jsx';
import { NewProj } from './NewProj.jsx';
import { Ongoing } from './Ongoing.jsx';

export const HomeContainer = (props) => {

  return (
    <div className='HomeContainer'>
      <h1>c l a y d a y</h1>
      <h3>welcome!</h3>
      <Reminders />
      <NewProj />
      <Ongoing />
    </div>
  );
};
