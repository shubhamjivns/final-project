import express from "express";
import {
  addToWishlistController,
  getWishlist,
  removeWishlistItem
} from "../controllers/wishlistController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, addToWishlistController);
router.get("/", authMiddleware, getWishlist);
router.delete("/:productId", authMiddleware, removeWishlistItem);

export default router;
