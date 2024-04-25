const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ADMIN_MODEL = require("../models/admin.model");
require("dotenv").config();

// Login endpoint
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let isAdmin = await ADMIN_MODEL.findOne({ email });
    if (!isAdmin) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    // const isMatch = bcrypt.compareSync(password, isAdmin?.password);
    const isMatch = isAdmin?.password.toString() == password.toString();

    if (!isMatch) {
      return res.status(401).json({
        status: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: isAdmin?._id, role: isAdmin?.role },
      process.env.JWT_SECRET,
      { expiresIn: "10m" }
    );

    res.status(200).json({
      status: true,
      message: "Login Successfully",
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
