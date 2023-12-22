const Project = require('../models/projectModel');

const projectController = {};

// createProject - create and save a new Project into the database.
projectController.createProject = async (req, res, next) => {
  console.log('entering createProject middleware');
  //   console.log('request body: ', req.body);
  const { nickname, phase, remind, days, notes, user } = req.body;
  //   if (!remind) days = 0;
//   if (user === undefined) user = 1;
  const newProject = await Project.create({
    nickname,
    phase,
    remind,
    days,
    notes,
    user,
  });
  if (newProject.length === 0) {
    return next({
      log: 'Error occurred in createProject middleware',
      message: 'An error has occurred in createProject',
    });
  } else {
    res.added = true;
    console.log('newly created project:', newProject);
    next();
  }
};

/**
 * verifyUser - Obtain username and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */
// userController.verifyUser = async (req, res, next) => {
//   const { username, password } = req.body;
//   // console.log('req body: ', username, password);
//   res.locals.loginSuccess = false;
//   const verifyUser = await User.findOne({ username, password });
//   console.log(verifyUser);
//   if (verifyUser === null) {
//     return next({
//       log: 'Express error handler caught verifyUser error: Username/Password not recognized',
//       status: 401,
//       message: { err: 'Username/Password not recognized' },
//     });
//   } else {
//     res.locals.loginSuccess = true;
//     return next();
//   }
// };

/**
 * getAllUsers - retrieve all users from the database and stores it into res.locals
 * before moving on to next middleware.
 */
// userController.getAllUsers = (req, res, next) => {
//   User.find({}, (err, users) => {
//     // if a database error occurs, call next with the error message passed in
//     // for the express global error handler to catch
//     if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));

//     // store retrieved users into res.locals and move on to next middleware
//     res.locals.users = users;
//     return next();
//   });
// };

module.exports = projectController;
