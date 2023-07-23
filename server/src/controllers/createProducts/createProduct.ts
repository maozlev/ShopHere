import { Request, Response } from "express";
import { ProductModel } from "../../models/productModel";

export async function createProduct(req: Request, res: Response) {
  try {
    console.log(req.body);
    const product = new ProductModel(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
    console.log("saved one product");
  } catch (error) {
    console.log("fail");
    res.status(500).json({ error: "Failed to save the product." });
  }
}
