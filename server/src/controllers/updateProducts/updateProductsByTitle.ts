import { Request, Response } from 'express';
import { ProductModel, Product } from '../../models/productModel';

export async function updateProductsByTitle(req: Request, res: Response) {
  try {
    const { title } = req.params;
    const updateData: Partial<Product> = req.body;

    const updateResult = await ProductModel.updateMany({ title }, updateData);
    const modifiedCount = updateResult.modifiedCount;

    if (modifiedCount > 0) {
      res.status(200).json({ message: 'Products updated successfully' });
    } else {
      res.status(404).json({ error: 'Products not found' });
    }
  } catch (error) {
    console.log('Failed to update the products:', error);
    res.status(500).json({ error: 'Failed to update the products.' });
  }
}
