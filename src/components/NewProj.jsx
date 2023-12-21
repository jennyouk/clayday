import React, { useState } from 'react';

export const NewProj = (props) => {
  const [nickname, setNickname] = useState('');
  const [phase, setPhase] = useState('thrown');
  const [remind, setRemind] = useState(false);
  const [days, setDays] = useState(3);
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let body;
    if (remind) body = { nickname, phase, remind, days, notes };
    else body = { nickname, phase, remind, days, notes };
    console.log(body);
    fetch('/addProject', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.added === true) {
          console.log('project added');
          // props.login(true);
        } else {
          console.log('unsuccessful');
          // setButtonText('Log in unsuccessful')
          // props.onFormSwitch('register')
        }
      })
      // .then(() => {
      //   props.history.push('/');
      // })
      .catch((err) => console.log('Project submission error: ', err));
  };

  return (
    <div className='new-proj'>
      <h3>add a new project</h3>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='nickname'>nickname </label>
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          type='nickname'
          placeholder='nickname'
          id='nickname'
          name='nickname'
        />

        <label htmlFor='phase'>phase </label>
        <select
          id='phase'
          name='phase'
          onChange={(e) => setPhase(e.target.value)}
        >
          <option value='thrown'>thrown</option>
          <option value='trimmed'>trimmed</option>
          <option value='bisqued'>bisqued</option>
          <option value='glazed'>glazed</option>
          <option value='fired'>fired</option>
        </select>

        <div>
          <input
            type='checkbox'
            id='remind'
            name='remind'
            value={remind}
            onChange={(e) => setRemind(!remind)}
          />
            <label htmlFor='remind'>set reminder in </label>
          <input
            value={days}
            onChange={(e) => setDays(e.target.value)}
            type='days'
            placeholder='3'
            id='days'
            name='days'
          />
          <label htmlFor='days'> days </label>
        </div>

        <label htmlFor='notes'>project notes </label>
        <textarea
          name='notes'
          rows='10'
          cols='30'
          value={notes}
          placeholder='(clay body, start weight, glaze)'
          onChange={(e) => setNotes(e.target.value)}
        >
          '(clay body, start weight, glaze)'
        </textarea>

        <button>submit</button>
      </form>
      {}
    </div>
  );
};
