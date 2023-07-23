import mongoose, { Schema, Document } from 'mongoose';

export interface Product extends Document {
  title: string;
  text: string;
  photo: string;
  price: number;
  amount?: number; // Optional property to indicate the amount of products
}

const productSchema = new Schema<Product>({
  title: String,
  text: String,
  photo: String,
  price: Number,
  amount: Number
});

export const ProductModel = mongoose.model<Product>('Product', productSchema, 'products');
