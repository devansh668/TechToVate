/**
 * destinations.js - Express router for /api/destinations
 *
 * GET  /api/destinations          - List all destinations (supports ?search= and ?featured=true)
 * GET  /api/destinations/:id      - Get a single destination by ID
 * POST /api/destinations          - Create a new destination
 * PUT  /api/destinations/:id      - Update a destination by ID
 * DELETE /api/destinations/:id    - Delete a destination by ID
 */

const express = require('express');
const { body, query, validationResult } = require('express-validator');
const { dbConnect, getMockData, saveMockData } = require('../db');
const { Destination } = require('../models');

const router = express.Router();

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Send validation errors back as 422 */
function handleValidation(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }
  return null;
}

// ─── GET /api/destinations ────────────────────────────────────────────────────

router.get(
  '/',
  [
    query('search').optional().isString().trim(),
    query('featured').optional().isIn(['true', 'false']),
  ],
  async (req, res) => {
    const validErr = handleValidation(req, res);
    if (validErr !== null) return;

    try {
      const conn = await dbConnect();
      const search = req.query.search || '';
      const featured = req.query.featured === 'true';

      let destinations;

      if (conn) {
        // ── MongoDB path ──
        let mongoQuery = {};
        if (featured) mongoQuery.featured = true;
        if (search) {
          mongoQuery.$or = [
            { name:        { $regex: search, $options: 'i' } },
            { location:    { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
          ];
        }

        destinations = await Destination.find(mongoQuery);

        // Auto-seed if empty and no search filter applied
        if (destinations.length === 0 && !search) {
          const mockData = getMockData();
          const toInsert = mockData.destinations.map(({ _id, ...rest }) => rest);
          await Destination.insertMany(toInsert);
          destinations = await Destination.find(mongoQuery);
        }
      } else {
        // ── JSON fallback path ──
        const mockData = getMockData();
        destinations = [...mockData.destinations];

        if (featured) destinations = destinations.filter((d) => d.featured);
        if (search) {
          const s = search.toLowerCase();
          destinations = destinations.filter(
            (d) =>
              d.name.toLowerCase().includes(s) ||
              d.location.toLowerCase().includes(s) ||
              d.description.toLowerCase().includes(s)
          );
        }
      }

      return res.json({ success: true, data: destinations });
    } catch (err) {
      console.error('[GET /destinations]', err);
      return res.status(500).json({ success: false, error: err.message });
    }
  }
);

// ─── GET /api/destinations/:id ────────────────────────────────────────────────

router.get('/:id', async (req, res) => {
  try {
    const conn = await dbConnect();
    const { id } = req.params;
    let destination;

    if (conn) {
      destination = await Destination.findById(id);
      if (!destination) {
        return res.status(404).json({ success: false, error: 'Destination not found.' });
      }
    } else {
      const mockData = getMockData();
      destination = mockData.destinations.find((d) => d._id === id);
      if (!destination) {
        return res.status(404).json({ success: false, error: 'Destination not found.' });
      }
    }

    return res.json({ success: true, data: destination });
  } catch (err) {
    console.error('[GET /destinations/:id]', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ─── POST /api/destinations ───────────────────────────────────────────────────

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required.'),
    body('location').notEmpty().withMessage('Location is required.'),
    body('rating').isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5.'),
    body('image').notEmpty().withMessage('Image is required.'),
    body('description').notEmpty().withMessage('Description is required.'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number.'),
    body('featured').optional().isBoolean(),
  ],
  async (req, res) => {
    const validErr = handleValidation(req, res);
    if (validErr !== null) return;

    try {
      const conn = await dbConnect();
      const { name, location, rating, image, description, price, featured = false } = req.body;
      let saved;

      if (conn) {
        saved = await Destination.create({ name, location, rating, image, description, price, featured });
      } else {
        const mockData = getMockData();
        saved = {
          _id: 'dest_' + Date.now(),
          name, location, rating, image, description, price, featured,
        };
        mockData.destinations.push(saved);
        saveMockData(mockData);
      }

      return res.status(201).json({ success: true, data: saved });
    } catch (err) {
      console.error('[POST /destinations]', err);
      return res.status(500).json({ success: false, error: err.message });
    }
  }
);

// ─── PUT /api/destinations/:id ────────────────────────────────────────────────

router.put(
  '/:id',
  [
    body('rating').optional().isFloat({ min: 0, max: 5 }),
    body('price').optional().isFloat({ min: 0 }),
    body('featured').optional().isBoolean(),
  ],
  async (req, res) => {
    const validErr = handleValidation(req, res);
    if (validErr !== null) return;

    try {
      const conn = await dbConnect();
      const { id } = req.params;
      const updates = req.body;
      let updated;

      if (conn) {
        updated = await Destination.findByIdAndUpdate(id, updates, {
          new: true,
          runValidators: true,
        });
        if (!updated) {
          return res.status(404).json({ success: false, error: 'Destination not found.' });
        }
      } else {
        const mockData = getMockData();
        const idx = mockData.destinations.findIndex((d) => d._id === id);
        if (idx === -1) {
          return res.status(404).json({ success: false, error: 'Destination not found.' });
        }
        mockData.destinations[idx] = { ...mockData.destinations[idx], ...updates };
        updated = mockData.destinations[idx];
        saveMockData(mockData);
      }

      return res.json({ success: true, data: updated });
    } catch (err) {
      console.error('[PUT /destinations/:id]', err);
      return res.status(500).json({ success: false, error: err.message });
    }
  }
);

// ─── DELETE /api/destinations/:id ────────────────────────────────────────────

router.delete('/:id', async (req, res) => {
  try {
    const conn = await dbConnect();
    const { id } = req.params;

    if (conn) {
      const deleted = await Destination.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(404).json({ success: false, error: 'Destination not found.' });
      }
    } else {
      const mockData = getMockData();
      const idx = mockData.destinations.findIndex((d) => d._id === id);
      if (idx === -1) {
        return res.status(404).json({ success: false, error: 'Destination not found.' });
      }
      mockData.destinations.splice(idx, 1);
      saveMockData(mockData);
    }

    return res.json({ success: true, message: 'Destination deleted successfully.' });
  } catch (err) {
    console.error('[DELETE /destinations/:id]', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
