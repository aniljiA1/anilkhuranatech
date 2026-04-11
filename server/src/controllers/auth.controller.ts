import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";
import { generateToken } from "../utils/generateToken";

export const register = async (req: Request, res: Response) => {
  console.log("REGISTER REQUEST BODY:", req.body);

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const existing = await User.findOne({ email });

  if (existing) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
  });

  res.status(201).json({
    token: generateToken(user.id),
    user,
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid password" });

  res.json({ token: generateToken(user.id), user });
};
