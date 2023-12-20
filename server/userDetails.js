const mongoose = require('mongoose');

// const mongoURI =
//   'mongodb+srv://jennyouk:ASkaXIUEegnpY9vX@clayday.i5vuqzh.mongodb.net/?retryWrites=true&w=majority';

// mongoose
//   .connect(mongoURI, {
//     // useNewUrlParser: true,
//     dbName: 'clayallday',
//   })
//   .then(() => {
//     console.log('Connected to database');
//   })
//   .catch((e) => console.log(e));

const UserDetailsSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    pass: String,
  },
  {
    collection: 'Logins',
  }
);

mongoose.model('UserInfo', UserDetailsSchema);
