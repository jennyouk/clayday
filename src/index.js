// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import App from './components/App';
// import store from './store';
// import styles from './scss/application.scss'; // eslint-disable-line no-unused-vars

render(
//   <Provider store={store}>
    <App />,
//   </Provider>,
  document.getElementById('root'),
);
