const express = require('express');
const app = express();
const port = process.env.PORT || 4242;
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'TRAB_PRAT1.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});