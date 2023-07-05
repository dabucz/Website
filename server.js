var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

var port = process.env.PORT || 2024;
var hostname = '0.0.0.0';

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
