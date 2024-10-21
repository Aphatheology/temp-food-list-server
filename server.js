const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; 

app.use(cors());

app.get('/food-list', (req, res) => {
  const filePath = path.join(__dirname, 'temp-food-list.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error reading the file' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
