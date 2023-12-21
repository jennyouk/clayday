const express = require('express');
const app = express();
const mongoose = require('mongoose');

const apiRouter = require('./routes/api');
// const cookieParser = require('cookie-parser');
// const userController = require('./controllers/userController');
// const cookieController = require('./controllers/cookieController');
// const sessionController = require('./controllers/sessionController');

const PORT = 3000;
app.use(express.json());
app.use('/api', apiRouter, (req, res) => console.log(req.body));



mongoose.connect(
  'mongodb+srv://jennyouk:ASkaXIUEegnpY9vX@clayday.i5vuqzh.mongodb.net/?retryWrites=true&w=majority'
  // 'mongodb+srv://student:ilovetesting@database-assessment.6vall.mongodb.net/week-4-assessment?retryWrites=true&w=majority',
  // { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});



//LOGIN//

app.use('/login', (req, res) => {
  console.log('request body: ', req.body);
  res.status(200).json({ message: 'logged in' });
});

app.use('/register', (req, res) => {
  console.log('request body: ', req.body);
  res.status(200).json({ message: 'registered' });
});


// app.post(
//   '/login',
//   userController.verifyUser,
//   // cookieController.setSSIDCookie,
//   // sessionController.startSession,
//   (req, res) => {
//     //cookieController.setSSIDCookie,
//     // what should happen here on successful log in?
//     // console.log('response object.cookie:', res.cookie.ssid);
//     if (!res.locals.loginSuccess) {
//       console.log('login unsuccessful!');

//       res.redirect('/signup');
//     } else {
//       console.log('login successful!');
//       res.redirect('/home');
//     }
//   }
// );

// DEFAULT ROUTES //
app.use((req, res) =>
  res.status(404).send("You're lost. I'm lost. We're lost")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
