const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  console.log(JSON.stringify(req.headers));
  res.send(`Hello World! from ${process.env.SERVER_NAME} `);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server running...'));
