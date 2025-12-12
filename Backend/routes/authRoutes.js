import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Signup Request:", req.body);

    // 1. Check if all fields are present
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check for existing user
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // 3. Hash password
    const hashed = await bcrypt.hash(password, 10);

    // 4. Create user in DB
    const newUser = await User.create({
      name,
      email,
      password: hashed,
    });

    // 5. Create JWT token
    const token = jwt.sign(
      { id: newUser._id },
      "SECRET_KEY_ANSH_CHANGE_THIS", // Change this later
      { expiresIn: "7d" }
    );

    // 6. Send response
    res.json({
      message: "Signup successful",
      token: token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });

  } catch (error) {
    console.log("Signup Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// export default router;


// LOGIN
router.post("/login", async (req, res) => {
const { email, password } = req.body;
console.log(req.body);


const user = await User.findOne({ email });
if (!user) return res.status(400).json({ message: "Invalid credentials" });


const match = await bcrypt.compare(password, user.password);
if (!match) return res.status(400).json({ message: "Wrong password" });


const token = jwt.sign({ id: user._id }, "SECRET123", { expiresIn: "7d" });


res.json({ message: "Login successful", token });
});


export default router;