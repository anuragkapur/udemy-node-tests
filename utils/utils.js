add = (a, b) => a + b;

square = x => x * x;

setName = (user, fullName) => {
  const nameParts = fullName.split(' ');
  user.firstName = nameParts[0];
  user.lastName = nameParts[1];
};

module.exports = {
  add,
  square,
  setName
};