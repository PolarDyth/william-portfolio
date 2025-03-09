import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import express from "express"
import { adminAuth } from "../middleware/adminAuth";
import pool from "../config/db.config";
import argon2 from "argon2";
dotenv.config();

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET || "default_secret";

router.post("/login", adminAuth, async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: "Email and password are required" });
    return;
  }

  try {
    const [admins] = await pool.query("SELECT * FROM admins WHERE username = ? AND password = ?", [username, password]);
    const admin = (admins as any[])[0];

    if (!admin) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const passwordMatch = await argon2.verify(admin.password, password);
    if (!passwordMatch) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const token = jwt.sign({ adminId: admin.id }, SECRET_KEY, { expiresIn: "15m" });

    res.cookie("auth", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict"
    });

    res.json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

export default router;