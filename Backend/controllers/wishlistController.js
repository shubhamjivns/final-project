import Wishlist from "../models/Wishlist.js";

// Add to Wishlist
export const addToWishlist = async (req, res) => {
  const { productId } = req.body;

  try {
    const exists = await Wishlist.findOne({ productId });
    if (exists) return res.json({ message: "Already in Wishlist" });

    await Wishlist.create({ productId });
    res.json({ message: "Added to Wishlist" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Wishlist
export const getWishlist = async (req, res) => {
  try {
    const items = await Wishlist.find().populate("productId");
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove from Wishlist
export const removeWishlistItem = async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.json({ message: "Removed from Wishlist" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
