const express = require('express');
const ejs = require('ejs');

const app = express();


// Define a simple route
app.get('/', (req, res) => {
  // Render the 'index' view with a variable
  res.send("REsponse from get")
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
