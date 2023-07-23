import { Request, Response } from "express";
import { ProductModel, Product } from '../../models/productModel';

export async function createProducts(req: Request, res: Response) {
  try {
    const products: Product[] = req.body.products;
    const bulkOperations = products.map((product: Product) => ({
      insertOne: {
        document: product,
      },
    }));

    const result = await ProductModel.bulkWrite(bulkOperations);

    res.status(201).json(result.insertedCount + " products inserted.");
    console.log("Inserted", result.insertedCount, "products");

  } catch (error) {
    console.log("Failed to insert the products:", error);
    res.status(500).json({ error: "Failed to insert the products." });
  }
}