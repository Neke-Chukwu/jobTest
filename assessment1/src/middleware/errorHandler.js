const axios = require('axios');

// Middleware to handle 404 (Not Found) errors
const notFound = (req, res, next) => {
  const err = new Error('Route Not Found');
  err.status = 404;
  next(err);
};

// Secure and robust error handling middleware
// This function must take four arguments: err, req, res, next
const errorHandler = (err, req, res, next) => {
  // Log the full error for debugging, but never send it to the client
  console.error(err.stack);

  // Set the status code, defaulting to 500 if not specified
  const statusCode = err.status || 500;

  // Send a generic, non-descriptive error message to the client
  res.status(statusCode).json({
    message: 'An internal server error occurred.',
  });
};

// A helper function for decoding Base64 strings.
// This function is kept separate from error handling.
const loadEnv = (value) => {
  // It's crucial to check if the value is a string before using Buffer.from
//   if (typeof value !== 'string') {
//     throw new Error('LoadEnv value must be a string.');
//   }
//   return Buffer.from(value, 'base64').toString('utf8');
// };
return value;
};
module.exports = { errorHandler, notFound, loadEnv };