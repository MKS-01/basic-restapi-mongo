const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('test');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`running at port${port}`);
});
