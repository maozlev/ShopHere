import { Request, Response } from 'express';
import { ProductModel, Product } from '../../models/productModel';

export async function updateProductById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updateData: Partial<Product> = req.body;

    const updatedProduct = await ProductModel.findByIdAndUpdate(id, updateData, { new: true });

    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.log('Failed to update the product:', error);
    res.status(500).json({ error: 'Failed to update the product.' });
  }
}
