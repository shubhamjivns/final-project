import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const router = express.Router();


// SIGNUP
router.post("/signup", async (req, res) => {
const { name, email, password } = req.body;


const exists = await User.findOne({ email });
if (exists) return res.status(400).json({ message: "Email already exists" });


const hashed = await bcrypt.hash(password, 10);


await User.create({ name, email, password: hashed });


res.json({ message: "Signup successful" });
});


// LOGIN
router.post("/login", async (req, res) => {
const { email, password } = req.body;


const user = await User.findOne({ email });
if (!user) return res.status(400).json({ message: "Invalid credentials" });


const match = await bcrypt.compare(password, user.password);
if (!match) return res.status(400).json({ message: "Wrong password" });


const token = jwt.sign({ id: user._id }, "SECRET123", { expiresIn: "7d" });


res.json({ message: "Login successful", token });
});


export default router;