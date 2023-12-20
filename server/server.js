const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const userInfo = require('./userDetails');
const cors = require('cors');

const PORT = 3000; //8080?
const app = express();

const mongoURI =
  'mongodb+srv://jennyouk:ASkaXIUEegnpY9vX@clayday.i5vuqzh.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(mongoURI, {
    // useNewUrlParser: true,
    dbName: 'clayallday',
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((e) => console.log(e));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
// app.use(cookieParser());
app.use('/src', express.static(path.resolve(__dirname, '../src')));

// app.use('/', express.static(path.resolve(__dirname, '../src/index.html')));

app.get('/', async (req, res) => {
  // const { name, email, pass } = req.body;
  try {
    const oneUser = await userInfo.findOne();
    console.log(oneUser);
    res.status(200);
  } catch (err) {
    res.status(500);
  }
});

// LOGGING IN //

// app.post('/login', async (req, res) => {
//   const { email, pass } = req.body;
//   try {
//     await userInfo.findOne({ email, pass });
//     res.status(200).send({ message: 'logged in' });
//   } catch (err) {
//     res.send(500).send({ message: 'login error' });
//   }
// });

// app.post('/register', async (req, res) => {
//   const { name, email, pass } = req.body;
//   try {
//     await userInfo.create({ name, email, pass });
//     res.status(200).json({ message: 'registered' });
//   } catch (err) {
//     res.send(500).json({ message: 'registration error' });
//   }
// });

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
