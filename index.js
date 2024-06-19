const express = require('express');
const app = express();
const port = process.env.PORT || 4242;
const path = require('path');

// Serve static files from the frontEnd directory
app.use(express.static(path.join(__dirname, 'frontEnd')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontEnd', 'TRAB_PRAT1.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
