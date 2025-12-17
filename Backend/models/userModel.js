import db from "../config/db.js";


/* Create user */
export const createUser = async ({ name, email, password }) => {
  const [result] = await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password]
  );
  return result.insertId;
};

/* Find user by email */
export const findUserByEmail = async (email) => {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ? LIMIT 1",
    [email]
  );
  return rows[0];
};

/* Find user by ID */
export const findUserById = async (id) => {
  const [rows] = await db.query(
    "SELECT id, name, email, created_at FROM users WHERE id = ?",
    [id]
  );
  return rows[0];
};
