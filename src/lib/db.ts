import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

const MONGODB_URI = process.env.MONGODB_URI || '';

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

// Check if we can connect to MongoDB
export async function dbConnect() {
  if (!MONGODB_URI) {
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log('MongoDB connected successfully');
      return mongooseInstance;
    }).catch((err) => {
      console.error('MongoDB connection error, falling back to JSON db:', err);
      cached.promise = null;
      return null;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    return null;
  }

  return cached.conn;
}

// Local JSON File Database Mocking Layer
// This file will act as a local database when MongoDB is not connected.
const MOCK_DB_FILE = path.join(process.cwd(), 'src/lib/mockDb.json');

export interface MockDestination {
  _id: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  price: number;
  featured: boolean;
}

export interface MockEnquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
  createdAt: string;
}

const DEFAULT_DESTINATIONS: MockDestination[] = [
  {
    _id: 'dest_1',
    name: 'Paris, France',
    location: 'The city of lights',
    rating: 4.8,
    image: '/images/paris.png',
    description: 'Experience the romantic streets, iconic Eiffel Tower, and world-class museums of France\'s capital.',
    price: 1299,
    featured: true,
  },
  {
    _id: 'dest_2',
    name: 'Bali, Indonesia',
    location: 'Island of the Gods',
    rating: 4.7,
    image: '/images/bali.png',
    description: 'Relax on tropical beaches, explore lush rice fields, and immerse yourself in the rich spiritual culture of Bali.',
    price: 899,
    featured: true,
  },
  {
    _id: 'dest_3',
    name: 'Dubai, UAE',
    location: 'Experience luxury',
    rating: 4.6,
    image: '/images/dubai.png',
    description: 'Discover futuristic architecture, luxury shopping, desert safaris, and pristine beaches in the heart of the Emirates.',
    price: 1599,
    featured: true,
  },
  {
    _id: 'dest_4',
    name: 'Interlaken, Switzerland',
    location: 'Adventure awaits',
    rating: 4.9,
    image: '/images/interlaken.png',
    description: 'Enjoy breathtaking Alpine views, crystal clear lakes, and year-round outdoor sports in Switzerland\'s adventure hub.',
    price: 1999,
    featured: true,
  },
];

interface MockDataStructure {
  destinations: MockDestination[];
  enquiries: MockEnquiry[];
}

function initializeMockDb() {
  if (!fs.existsSync(MOCK_DB_FILE)) {
    const initialData: MockDataStructure = {
      destinations: DEFAULT_DESTINATIONS,
      enquiries: [],
    };
    fs.mkdirSync(path.dirname(MOCK_DB_FILE), { recursive: true });
    fs.writeFileSync(MOCK_DB_FILE, JSON.stringify(initialData, null, 2));
  }
}

export function getMockData(): MockDataStructure {
  initializeMockDb();
  try {
    const raw = fs.readFileSync(MOCK_DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Error reading mock DB file, using default values', error);
    return { destinations: DEFAULT_DESTINATIONS, enquiries: [] };
  }
}

export function saveMockData(data: MockDataStructure) {
  initializeMockDb();
  try {
    fs.writeFileSync(MOCK_DB_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing to mock DB file', error);
  }
}
