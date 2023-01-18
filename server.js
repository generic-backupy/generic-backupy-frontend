const express = require('express');
const path = require('path');
const app = express();
const port = 9000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) { // This is needed for React Router to work correctly
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
