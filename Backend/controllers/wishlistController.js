import {
  addToWishlist,
  getUserWishlist,
  removeFromWishlist
} from "../models/wishlistModel.js";

/* Add to Wishlist */
export const addToWishlistController = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  try {
    await addToWishlist(userId, productId);
    res.json({ message: "Added to Wishlist" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Get Wishlist */
export const getWishlist = async (req, res) => {
  const userId = req.user.id;

  try {
    const items = await getUserWishlist(userId);
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Remove from Wishlist */
export const removeWishlistItem = async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.params;

  try {
    await removeFromWishlist(userId, productId);
    res.json({ message: "Removed from Wishlist" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
