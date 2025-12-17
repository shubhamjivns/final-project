import db from "../config/db.js";


export const findCartItem = async (userId, productId) => {
  const [rows] = await db.query(
    "SELECT * FROM cart WHERE user_id = ? AND product_id = ? LIMIT 1",
    [userId, productId]
  );
  return rows[0];
};

export const addCartItem = async (userId, productId, quantity) => {
  await db.query(
    "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)",
    [userId, productId, quantity]
  );
};

export const increaseQuantity = async (cartId, quantity) => {
  await db.query(
    "UPDATE cart SET quantity = quantity + ? WHERE id = ?",
    [quantity, cartId]
  );
};

export const getUserCart = async (userId) => {
  const [rows] = await db.query(
    `SELECT cart.id, products.name, products.price, products.image, cart.quantity
     FROM cart
     JOIN products ON cart.product_id = products.id
     WHERE cart.user_id = ?`,
    [userId]
  );
  return rows;
};

export const deleteCartItem = async (id) => {
  await db.query(
    "DELETE FROM cart WHERE id = ?",
    [id]
  );
};
