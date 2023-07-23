import { Request, Response } from "express";
import { ProductModel, Product } from "../../models/productModel";

export async function deleteProductById(req: Request, res: Response) {
  try {
    const { productId } = req.query;
    console.log(productId);
    const result = await ProductModel.deleteOne({ _id: productId });
    if (result.deletedCount === 1) {
      res.status(200).json("Product deleted successfully.");
      console.log("Deleted product:", productId);
    } else {
      res.status(404).json("Product not found.");
    }
  } catch (error) {
    console.log("fail");
    res.status(500).json({ error: "Failed to get the product." });
  }
}
