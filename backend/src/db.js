/**
 * db.js - Database connection and local JSON fallback layer
 *
 * Mirrors the logic from src/lib/db.ts in the Next.js frontend.
 * - Attempts to connect to MongoDB if MONGODB_URI is set.
 * - Falls back to a local JSON file (mockDb.json) when no MongoDB URI
 *   is configured or when the connection fails.
 */

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// ─── MongoDB Connection ────────────────────────────────────────────────────────

let cachedConn = null;
let cachedPromise = null;

/**
 * Connects to MongoDB if MONGODB_URI is set, returns the connection or null.
 */
async function dbConnect() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    return null; // No URI → use JSON fallback
  }

  if (cachedConn) return cachedConn;

  if (!cachedPromise) {
    cachedPromise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((instance) => {
        console.log('✅ MongoDB connected successfully');
        return instance;
      })
      .catch((err) => {
        console.error('❌ MongoDB connection error, falling back to JSON DB:', err.message);
        cachedPromise = null;
        return null;
      });
  }

  try {
    cachedConn = await cachedPromise;
  } catch {
    cachedPromise = null;
    return null;
  }

  return cachedConn;
}

// ─── Local JSON Mock Database ──────────────────────────────────────────────────

const MOCK_DB_FILE = path.join(__dirname, '..', 'data', 'mockDb.json');

/** Default seed data used when the JSON file doesn't exist yet */
const DEFAULT_DESTINATIONS = [
  {
    _id: 'dest_1',
    name: 'Paris, France',
    location: 'The city of lights',
    rating: 4.8,
    image: '/images/paris.png',
    description:
      "Experience the romantic streets, iconic Eiffel Tower, and world-class museums of France's capital.",
    price: 1299,
    featured: true,
  },
  {
    _id: 'dest_2',
    name: 'Bali, Indonesia',
    location: 'Island of the Gods',
    rating: 4.7,
    image: '/images/bali.png',
    description:
      'Relax on tropical beaches, explore lush rice fields, and immerse yourself in the rich spiritual culture of Bali.',
    price: 899,
    featured: true,
  },
  {
    _id: 'dest_3',
    name: 'Dubai, UAE',
    location: 'Experience luxury',
    rating: 4.6,
    image: '/images/dubai.png',
    description:
      'Discover futuristic architecture, luxury shopping, desert safaris, and pristine beaches in the heart of the Emirates.',
    price: 1599,
    featured: true,
  },
  {
    _id: 'dest_4',
    name: 'Interlaken, Switzerland',
    location: 'Adventure awaits',
    rating: 4.9,
    image: '/images/interlaken.png',
    description:
      "Enjoy breathtaking Alpine views, crystal clear lakes, and year-round outdoor sports in Switzerland's adventure hub.",
    price: 1999,
    featured: true,
  },
];

/** Ensures the mockDb.json file exists with seed data. */
function initializeMockDb() {
  if (!fs.existsSync(MOCK_DB_FILE)) {
    fs.mkdirSync(path.dirname(MOCK_DB_FILE), { recursive: true });
    fs.writeFileSync(
      MOCK_DB_FILE,
      JSON.stringify({ destinations: DEFAULT_DESTINATIONS, enquiries: [] }, null, 2)
    );
    console.log('📄 Created mockDb.json with seed data');
  }
}

/** Read and parse the local JSON mock database. */
function getMockData() {
  initializeMockDb();
  try {
    const raw = fs.readFileSync(MOCK_DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading mockDb.json, using defaults:', err.message);
    return { destinations: DEFAULT_DESTINATIONS, enquiries: [] };
  }
}

/** Persist updated data back to the local JSON mock database. */
function saveMockData(data) {
  initializeMockDb();
  try {
    fs.writeFileSync(MOCK_DB_FILE, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error writing mockDb.json:', err.message);
  }
}

module.exports = { dbConnect, getMockData, saveMockData };
