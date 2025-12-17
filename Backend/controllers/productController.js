import {
  getAllProducts,
  createProduct
} from "../models/productModel.js";

/* Get all products */
export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Add new product */
export const addProduct = async (req, res) => {
  try {
    const productId = await createProduct(req.body);
    res.json({
      message: "Product Added",
      productId
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
