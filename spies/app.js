const db = require('./db');

handleSignup = (email, password) => {
  // todo: check if email already exists
  db.saveUser({
    email: email,
    password: password
  });
  // todo: send email notification
};

module.exports = {
  handleSignup
};