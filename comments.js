// Create web server using Express
const express = require('express');
const app = express();

// Create a route handler for GET /comments
app.get('/comments', (req, res) => {
  res.send('GET /comments');
});

// Create a route handler for POST /comments
app.post('/comments', (req, res) => {
  res.send('POST /comments');
});

// Create a route handler for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('GET /comments/:id');
});

// Create a route handler for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  res.send('PUT /comments/:id');
});

// Create a route handler for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.send('DELETE /comments/:id');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port: 3000');
});

