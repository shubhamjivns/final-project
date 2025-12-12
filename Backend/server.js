import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://harshmishra3721_db_user:cMu88ZWO9DPFnAst@cluster0.vpdyofi.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.log(err));

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("API Running..."));

app.listen(5000, () => console.log("Server running on port 5000"));


// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // const mongoURI = process.env.MONGO_URI;

// // mongoose.connect(mongoURI) // NO options
// //   .then(() => console.log("MongoDB connected"))
// //   .catch(err => console.error("MongoDB connection error:", err));


// app.get("/", (req, res) => {  
//   res.send("Server is running");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
