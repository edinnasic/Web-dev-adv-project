// server/index.js

import express from 'express';
const app = express();
const port = 3001; // You can choose a different port if 3001 is in use

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});