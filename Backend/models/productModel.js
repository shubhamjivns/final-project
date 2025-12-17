import db from "../config/db.js";


/* Create product */
export const createProduct = async (product) => {
  const { name, description, price, image } = product;

  const [result] = await db.query(
    `INSERT INTO products (name, description, price, image)
     VALUES (?, ?, ?, ?)`,
    [name, description, price, image]
  );

  return result.insertId;
};

/* Get all products */
export const getAllProducts = async () => {
  const [rows] = await db.query(
    "SELECT * FROM products ORDER BY id DESC"
  );
  return rows;
};

/* Get single product */
export const getProductById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM products WHERE id = ? LIMIT 1",
    [id]
  );
  return rows[0];
};

/* Update product */
export const updateProduct = async (id, product) => {
  const { name, description, price, image } = product;

  await db.query(
    `UPDATE products
     SET name = ?, description = ?, price = ?, image = ?
     WHERE id = ?`,
    [name, description, price, image, id]
  );
};

/* Delete product */
export const deleteProduct = async (id) => {
  await db.query(
    "DELETE FROM products WHERE id = ?",
    [id]
  );
};
