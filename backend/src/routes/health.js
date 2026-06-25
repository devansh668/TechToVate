/**
 * health.js - Health-check endpoint
 *
 * GET /api/health  →  Returns server status, uptime, and database mode.
 */

const express = require('express');
const { dbConnect } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  let dbStatus = 'json_fallback';

  try {
    const conn = await dbConnect();
    if (conn) dbStatus = 'mongodb_connected';
  } catch {
    dbStatus = 'error';
  }

  return res.json({
    success: true,
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    db: dbStatus,
  });
});

module.exports = router;
