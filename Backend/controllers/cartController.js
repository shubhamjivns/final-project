import {
  findCartItem,
  addCartItem,
  increaseQuantity,
  getUserCart,
  deleteCartItem
} from "../models/CartModel.js";

/* Add to Cart */
export const addToCart = async (req, res) => {
  const { productId, quantity = 1 } = req.body;
  const userId = req.user.id;

  try {
    const existing = await findCartItem(userId, productId);

    if (existing) {
      await increaseQuantity(existing.id, quantity);
    } else {
      await addCartItem(userId, productId, quantity);
    }

    res.json({ message: "Added to Cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Get Cart */
export const getCart = async (req, res) => {
  const userId = req.user.id;

  try {
    const cart = await getUserCart(userId);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Remove Cart Item */
export const removeCartItem = async (req, res) => {
  try {
    await deleteCartItem(req.params.id);
    res.json({ message: "Item Removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
