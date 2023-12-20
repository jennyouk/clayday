const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userController = require('./userController'); //server/UserController.js

const PORT = 3000;

mongoose.connect(
  'mongodb+srv://jennyouk:ASkaXIUEegnpY9vX@clayday.i5vuqzh.mongodb.net/?retryWrites=true&w=majority',
  // 'mongodb+srv://student:ilovetesting@database-assessment.6vall.mongodb.net/week-4-assessment?retryWrites=true&w=majority',
  // { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const userRouter = express.Router();
app.use('/user', userRouter);

userRouter.get('/', userController.getUser, (req, res) => {
  res.status(200).json(res.locals.found);
});

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
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
