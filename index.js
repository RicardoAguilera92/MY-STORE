const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Express server');
});

app.get('/new-route', (req, res) => {
  res.send('Hello This is a new route');
});

routerApi(app);

app.listen(port, () => {
  console.log('My port ' + port);
});
