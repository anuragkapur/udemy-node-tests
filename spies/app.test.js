const rewire = require('rewire');
const expect = require('expect');

const app = rewire('./app');

describe('App', () => {

  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call saveUser with user object', () => {
    const email = 'anurag@example.com';
    const password = 'password';
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});