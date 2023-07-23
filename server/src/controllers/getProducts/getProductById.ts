import { Request, Response } from "express";
import { ProductModel, Product } from "../../models/productModel";

export async function getProductById(req: Request, res: Response) {

  try {
    const { productId } = req.query;
    const product: Product | null = await ProductModel.findById(productId); // Use findById to find the product by ID
    if (product) {
      res.status(200).json({
        product: {
          id: product._id,
          title: product.title,
          text: product?.text,
          price: product.price,
        },
      });
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.log("Failed to get the product:", error);
    res.status(500).json({ error: "Failed to get the product." });
  }
}
