// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";

// import productRoutes from "./routes/productRoutes.js";
// import cartRoutes from "./routes/cartRoutes.js";
// import wishlistRoutes from "./routes/wishlistRoutes.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect("mongodb://127.0.0.1:27017/vivensaa")
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// app.use("/api/products", productRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/wishlist", wishlistRoutes);

// app.get("/", (req, res) => res.send("API Running..."));

// app.listen(5000, () => console.log("Server running on port 5000"));
// server.js (CommonJS)

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

mongoose.connect(process.env.MONGO_URI) // NO options
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
