// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>c l a y d a y</h1>
//       </div>
//     );
//   }
// }

import React, { useState } from 'react';
// import { Login } from './Login.jsx';
// import { Register } from './Register.jsx';
import { Entry } from './Entry.jsx';
import '../scss/application.scss';

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className='App'>
      <Entry />
      {/* <h1>clay day</h1> */}
      {/* {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} */}

    </div>
  );
};

export default App;
