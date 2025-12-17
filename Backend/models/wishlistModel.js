import db from "../config/db.js";


/* Add to wishlist */
export const addToWishlist = async (userId, productId) => {
  await db.query(
    "INSERT IGNORE INTO wishlist (user_id, product_id) VALUES (?, ?)",
    [userId, productId]
  );
};

/* Get user's wishlist */
export const getUserWishlist = async (userId) => {
  const [rows] = await db.query(
    `SELECT wishlist.id, products.name, products.price, products.image
     FROM wishlist
     JOIN products ON wishlist.product_id = products.id
     WHERE wishlist.user_id = ?`,
    [userId]
  );
  return rows;
};

/* Remove from wishlist */
export const removeFromWishlist = async (userId, productId) => {
  await db.query(
    "DELETE FROM wishlist WHERE user_id = ? AND product_id = ?",
    [userId, productId]
  );
};
