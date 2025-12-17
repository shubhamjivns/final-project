import express from "express";
import cors from "cors";
import db from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

(async () => {
  try {
    await db.query("SELECT 1");
    console.log("MySQL Connected ✅");
  } catch (error) {
    console.error("MySQL connection failed ❌", error.message);
  }
})();

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("API Running..."));

app.listen(5000, () => console.log("Server running on port 5000"));
