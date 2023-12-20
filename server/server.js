const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = 8080; //3000?
const app = express();

const mongoURI =
  'mongodb+srv://jennyouk:ASkaXIUEegnpY9vX@clayday.i5vuqzh.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI);

app.use(express.json());
app.use(express.urlencoded());
// app.use(cookieParser());
app.use('/src', express.static(path.resolve(__dirname, '../src')));

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
