const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to Miracoss - Decentralized Task Management System!');
});

app.listen(port, () => {
  console.log(`Miracoss server listening at http://localhost:${port}`);
});
