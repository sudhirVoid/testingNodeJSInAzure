const express = require('express');
const ejs = require('ejs');
const createError = require('http-errors');
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  // Render the 'index' view with a variable
  res.send("Response from get");
});

// Updated error handler to send a plain text error message
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err.message);
  res.status(err.status || 500).send('Error: ' + err.message);
});

// // Middleware to handle 404 errors
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
