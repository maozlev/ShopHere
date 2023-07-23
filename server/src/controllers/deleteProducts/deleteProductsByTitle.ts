import { Request, Response } from "express";
import { ProductModel, Product } from "../../models/productModel";

export async function deleteProductsByTitle(req: Request, res: Response) {
  try {
    const { productTitle } = req.query;

    // Delete products matching the given title
    const deleteResult = await ProductModel.deleteMany({ title: productTitle });

    if (deleteResult.deletedCount > 0) {
      res.status(200).json({ message: `${deleteResult.deletedCount} products deleted.` });
    } else {
      res.status(404).json({ error: "No products found with the given title." });
    }
  } catch (error) {
    console.log("Failed to delete the products:", error);
    res.status(500).json({ error: "Failed to delete the products." });
  }
}
