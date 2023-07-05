var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();

// Serve static files from the "dist" directory
app.use(serveStatic(path.join(__dirname, 'dist')));

// Configure fallback route for Vue Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

var port = process.env.PORT || 2024;
var hostname = '0.0.0.0';

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
