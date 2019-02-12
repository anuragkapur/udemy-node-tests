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