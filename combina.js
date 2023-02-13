const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.post('/add', (req, res) => {

  const numbers = req.body.numbers;

  const sum = numbers.reduce((acc, cur) => acc + cur, 0);

  res.json({ result: sum });
});

app.post('/multiply', (req, res) => {
  const numbers = req.body.numbers;

  const product = numbers.reduce((acc, cur) => acc * cur, 1);

  res.json({ result: product });
});

app.listen(5000, () => console.log('Server started on port 5000'));
