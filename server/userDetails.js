const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    pass: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);

// const mongoose = require('mongoose');

// const mongoURI =
//   'mongodb+srv://jennyouk:ASkaXIUEegnpY9vX@clayday.i5vuqzh.mongodb.net/?retryWrites=true&w=majority';

// mongoose
//   .connect(mongoURI, {
//     // options for the connect method to parse the URI
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//     // sets the name of the DB that our collections are part of
//     dbName: 'clayallday',
//   })
//   .then(() => {
//     console.log('Connected to database');
//   })
//   .catch((e) => console.log(e));

// const Schema = mongoose.Schema;

// const UserDetailsSchema = new Schema(
//   {
//     name: String,
//     email: String,
//     pass: String,
//   },
//   {
//     collection: 'Logins',
//   }
// );

// const User = mongoose.model('Login', UserDetailsSchema);

// module.exports = User;
