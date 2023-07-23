import { Request, Response } from "express";
import { ProductModel, Product } from "../../models/productModel";

export async function getProductsByTitle(req: Request, res: Response) {
  try {
    const { searchQuery } = req.query;
    const products: Product[] = await ProductModel.find({
      title: { $regex: searchQuery, $options: "i" },
    });
    if (products.length > 0) {
      res.status(200).json({
        products: products.map((product) => ({
          id: product.id,
          title: product.title,
          text: product?.text,
          price: product.price,
        })),
      });
    } else {
      res.status(404).json({ error: "No products found" });
    }
  } catch (error) {
    console.log("fail");
    res.status(500).json({ error: "Failed to get the products." });
  }
}
