import express from "express";
import { addToCart, getCart, removeCartItem } from "../controllers/cartController.js";

const router = express.Router();

router.post("/add", addToCart);
router.get("/", getCart);
router.delete("/:id", removeCartItem);

export default router;

