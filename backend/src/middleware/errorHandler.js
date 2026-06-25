/**
 * errorHandler.js - Central Express error handler middleware
 *
 * Catches any errors thrown or passed via next(err) in routes
 * and returns a consistent JSON error envelope.
 */

function notFoundHandler(req, res, next) {
  res.status(404).json({
    success: false,
    error: `Route not found: ${req.method} ${req.originalUrl}`,
  });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error('[ErrorHandler]', err);

  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({ success: false, error: message });
}

module.exports = { notFoundHandler, errorHandler };
