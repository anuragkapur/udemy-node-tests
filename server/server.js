const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Anurag Kapur',
    location: 'London'
  }, {
    name: 'Joe Bloggs',
    location: 'Boston'
  }])
});

app.listen(3000, () => {
  console.log('listening on port 30000');
});

module.exports.app = app;