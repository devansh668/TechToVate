/**
 * enquiries.js - Express router for /api/enquiries
 *
 * GET  /api/enquiries        - List all enquiries (latest first)
 * GET  /api/enquiries/:id    - Get a single enquiry by ID
 * POST /api/enquiries        - Submit a new enquiry
 * DELETE /api/enquiries/:id  - Delete an enquiry by ID
 */

const express = require('express');
const { body, validationResult } = require('express-validator');
const { dbConnect, getMockData, saveMockData } = require('../db');
const { Enquiry } = require('../models');

const router = express.Router();

// ─── Helpers ──────────────────────────────────────────────────────────────────

function handleValidation(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }
  return null;
}

// ─── GET /api/enquiries ───────────────────────────────────────────────────────

router.get('/', async (req, res) => {
  try {
    const conn = await dbConnect();
    let enquiries;

    if (conn) {
      enquiries = await Enquiry.find().sort({ createdAt: -1 });
    } else {
      const mockData = getMockData();
      enquiries = [...mockData.enquiries].reverse();
    }

    return res.json({ success: true, data: enquiries });
  } catch (err) {
    console.error('[GET /enquiries]', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ─── GET /api/enquiries/:id ───────────────────────────────────────────────────

router.get('/:id', async (req, res) => {
  try {
    const conn = await dbConnect();
    const { id } = req.params;
    let enquiry;

    if (conn) {
      enquiry = await Enquiry.findById(id);
      if (!enquiry) {
        return res.status(404).json({ success: false, error: 'Enquiry not found.' });
      }
    } else {
      const mockData = getMockData();
      enquiry = mockData.enquiries.find((e) => e._id === id);
      if (!enquiry) {
        return res.status(404).json({ success: false, error: 'Enquiry not found.' });
      }
    }

    return res.json({ success: true, data: enquiry });
  } catch (err) {
    console.error('[GET /enquiries/:id]', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ─── POST /api/enquiries ──────────────────────────────────────────────────────

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required.'),
    body('email').isEmail().withMessage('A valid email is required.'),
    body('phone').notEmpty().withMessage('Phone is required.'),
    body('destination').notEmpty().withMessage('Destination is required.'),
    body('message').notEmpty().withMessage('Message is required.'),
  ],
  async (req, res) => {
    const validErr = handleValidation(req, res);
    if (validErr !== null) return;

    try {
      const conn = await dbConnect();
      const { name, email, phone, destination, message } = req.body;
      let saved;

      if (conn) {
        saved = await Enquiry.create({ name, email, phone, destination, message });
      } else {
        const mockData = getMockData();
        saved = {
          _id: 'enq_' + Date.now(),
          name,
          email,
          phone,
          destination,
          message,
          createdAt: new Date().toISOString(),
        };
        mockData.enquiries.push(saved);
        saveMockData(mockData);
      }

      return res.status(201).json({ success: true, data: saved });
    } catch (err) {
      console.error('[POST /enquiries]', err);
      return res.status(500).json({ success: false, error: err.message });
    }
  }
);

// ─── DELETE /api/enquiries/:id ────────────────────────────────────────────────

router.delete('/:id', async (req, res) => {
  try {
    const conn = await dbConnect();
    const { id } = req.params;

    if (conn) {
      const deleted = await Enquiry.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(404).json({ success: false, error: 'Enquiry not found.' });
      }
    } else {
      const mockData = getMockData();
      const idx = mockData.enquiries.findIndex((e) => e._id === id);
      if (idx === -1) {
        return res.status(404).json({ success: false, error: 'Enquiry not found.' });
      }
      mockData.enquiries.splice(idx, 1);
      saveMockData(mockData);
    }

    return res.json({ success: true, message: 'Enquiry deleted successfully.' });
  } catch (err) {
    console.error('[DELETE /enquiries/:id]', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
