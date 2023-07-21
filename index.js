const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express server');
});

app.get('/new-route', (req, res) => {
  res.send('Hello This is a new route');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000,
  });
});

app.listen(port, () => {
  console.log('My port ' + port);
});
