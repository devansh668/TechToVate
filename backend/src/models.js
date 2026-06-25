/**
 * models.js - Mongoose schemas & models
 *
 * Mirrors src/lib/models.ts from the Next.js frontend.
 */

const mongoose = require('mongoose');

// ─── Destination ──────────────────────────────────────────────────────────────

const DestinationSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  location:    { type: String, required: true },
  rating:      { type: Number, required: true, min: 0, max: 5 },
  image:       { type: String, required: true },
  description: { type: String, required: true },
  price:       { type: Number, required: true },
  featured:    { type: Boolean, default: false },
});

// ─── Enquiry ──────────────────────────────────────────────────────────────────

const EnquirySchema = new mongoose.Schema({
  name:        { type: String, required: true },
  email:       { type: String, required: true },
  phone:       { type: String, required: true },
  destination: { type: String, required: true },
  message:     { type: String, required: true },
  createdAt:   { type: Date, default: Date.now },
});

// Prevent model re-registration on hot reloads
const Destination =
  mongoose.models.Destination || mongoose.model('Destination', DestinationSchema);

const Enquiry =
  mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);

module.exports = { Destination, Enquiry };
