/**
 * index.js - Wanderlust Travel Agency — Node.js/Express Backend
 *
 * Endpoints
 * ─────────────────────────────────────────────
 *  GET    /api/health                   Health check
 *
 *  GET    /api/destinations             List destinations (?search= &featured=true)
 *  GET    /api/destinations/:id         Get one destination
 *  POST   /api/destinations             Create a destination
 *  PUT    /api/destinations/:id         Update a destination
 *  DELETE /api/destinations/:id         Delete a destination
 *
 *  GET    /api/enquiries                List all enquiries (newest first)
 *  GET    /api/enquiries/:id            Get one enquiry
 *  POST   /api/enquiries                Submit an enquiry
 *  DELETE /api/enquiries/:id            Delete an enquiry
 * ─────────────────────────────────────────────
 *
 * Database strategy (same as Next.js frontend):
 *   • If MONGODB_URI is set in .env → uses MongoDB via Mongoose
 *   • Otherwise → reads/writes a local JSON file at /data/mockDb.json
 */

require('dotenv').config();

const express = require('express');
const cors    = require('cors');
const helmet  = require('helmet');
const morgan  = require('morgan');

const destinationsRouter        = require('./routes/destinations');
const enquiriesRouter           = require('./routes/enquiries');
const healthRouter              = require('./routes/health');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

// ─── App Setup ────────────────────────────────────────────────────────────────

const app  = express();
const PORT = process.env.PORT || 5000;

// ─── CORS ─────────────────────────────────────────────────────────────────────

const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000')
  .split(',')
  .map((o) => o.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. curl, Postman, server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS blocked: origin '${origin}' is not allowed`));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// ─── Core Middleware ──────────────────────────────────────────────────────────

app.use(helmet());                        // Security headers
app.use(morgan('dev'));                   // HTTP request logging
app.use(express.json());                 // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// ─── Routes ───────────────────────────────────────────────────────────────────

app.use('/api/health',       healthRouter);
app.use('/api/destinations', destinationsRouter);
app.use('/api/enquiries',    enquiriesRouter);

// ─── Root welcome ─────────────────────────────────────────────────────────────

app.get('/', (req, res) => {
  res.json({
    message: '🌍 Wanderlust Travel Agency API',
    version: '1.0.0',
    docs: {
      health:       'GET  /api/health',
      destinations: 'GET  /api/destinations',
      enquiries:    'GET  /api/enquiries',
    },
  });
});

// ─── Error Handling ───────────────────────────────────────────────────────────

app.use(notFoundHandler);
app.use(errorHandler);

// ─── Start Server ─────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  const mongoUri = process.env.MONGODB_URI;
  console.log('');
  console.log('  🌍  Wanderlust Travel Agency — Backend');
  console.log('  ─────────────────────────────────────────');
  console.log(`  🚀  Server running at   http://localhost:${PORT}`);
  console.log(`  🗄️  Database mode:      ${mongoUri ? 'MongoDB (' + mongoUri + ')' : 'JSON file fallback (data/mockDb.json)'}`);
  console.log(`  🌐  CORS origins:       ${allowedOrigins.join(', ')}`);
  console.log('  ─────────────────────────────────────────');
  console.log('');
});

module.exports = app; // Export for testing
