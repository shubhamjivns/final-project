import Cart from "../models/Cart.js";

// Add to Cart
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const existing = await Cart.findOne({ productId });

    if (existing) {
      existing.quantity += 1;
      await existing.save();
    } else {
      await Cart.create({ productId, quantity });
    }

    res.json({ message: "Added to Cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find().populate("productId");
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove item from Cart
export const removeCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item Removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
