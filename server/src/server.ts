import express from "express";
import mongoose from "mongoose";
import createProduct from "./routes/createProduct";
import createProducts from "./routes/createProducts";
import getProductById from "./routes/getProductById";
import getProductsByTitle from "./routes/getProductsByTitle";
import deleteProductById from "./routes/deleteProductById";
import deleteProductsByTitle from "./routes/deleteProductsByTitle";
import updateProductByIdRouter from './routes/updateProductByIdRouter';
import updateProductsByTitle from './routes/updateProductsByTitleRouter';


async function main() {
  await mongoose
    .connect("mongodb+srv://maoz2001:maoz2001@cluster0.mrkk1.mongodb.net/")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
}

const app = express();
const port = 3000;

// Connect to MongoDB

main().catch((err) => console.log(err));

// Define routes and middleware

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("welcom to the store!");
});

// Mount the product routes
app.use("/createProduct", createProduct);
app.use("/createProducts", createProducts);
app.use("/getProductById", getProductById);
app.use("/getProductsByTitle", getProductsByTitle); 
app.use("/deleteProductById", deleteProductById); 
app.use("/deleteProductsByTitle", deleteProductsByTitle); 
app.use('/updateProductById', updateProductByIdRouter);
app.use('/updateProductsByTitle', updateProductsByTitle);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
