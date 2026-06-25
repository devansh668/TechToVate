import mongoose, { Schema, Document } from 'mongoose';

export interface IDestination extends Document {
  name: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  price: number;
  featured: boolean;
}

export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
  createdAt: Date;
}

const DestinationSchema: Schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  featured: { type: Boolean, default: false },
});

const EnquirySchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  destination: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Next.js development server hot-reloads models, so we check if they already exist
export const Destination = mongoose.models.Destination || mongoose.model<IDestination>('Destination', DestinationSchema);
export const Enquiry = mongoose.models.Enquiry || mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
