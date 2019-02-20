const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  const res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}`);
  // }
});

it('should square number', () => {
  const res = utils.square(11);
  if (res !== 121) {
    throw new Error(`Expected 121, but got ${res}`);
  }
});

it('should set firstName and lastName  with right values', () => {
  const user = {
    age: 18,
    location: 'London'
  };

  utils.setName(user, 'Anurag Kapur');
  expect(user).toContainKey('firstName').toContainKey('lastName');
  expect(user.firstName).toBe('Anurag');
  expect(user.lastName).toBe('Kapur');

  // alternate way of writing the assertions
  expect(user).toInclude({
    firstName: 'Anurag',
    lastName: 'Kapur'
  })
});

it('should square the number asynchronously', (done) => {
  utils.asyncSquare(3, (result) => {
    expect(result).toBe(9).toBeA('number');
    done();
  })
});