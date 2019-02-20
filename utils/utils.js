add = (a, b) => a + b;

square = x => x * x;

asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback(x * x);
  }, 1000)
};

setName = (user, fullName) => {
  const nameParts = fullName.split(' ');
  user.firstName = nameParts[0];
  user.lastName = nameParts[1];
};

module.exports = {
  add,
  square,
  setName,
  asyncSquare
};