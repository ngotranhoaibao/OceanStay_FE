import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { generateToken } from "../utils/generateToken.js";
dotenv.config();
export const refreshTokenService = async (refreshToken) => {
  if (!refreshToken) {
    const error = new Error("No refresh token provided");
    error.status = 400;
    throw error;
  }
  let decoded;
  try {
    decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    const authError = new Error("Invalid refresh token");
    authError.status = 401;
    throw authError;
  }

  const user = await User.findById(decoded.id).select("+refreshToken");
  if (!user || user.refreshToken !== refreshToken) {
    if (user) {
      user.refreshToken = null;
      await user.save();
    }
    const authError = new Error("Refresh token does not match");
    authError.status = 401;
    throw authError;
  }
  const tokens = generateToken(user._id);
  user.refreshToken = tokens.refreshToken;
  await user.save();
  return {
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken,
  };
};
