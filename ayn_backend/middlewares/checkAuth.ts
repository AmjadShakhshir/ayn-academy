import jwt from "jsonwebtoken";
import { NextFunction, Response } from "express";
import { DecodedUser, WithAuthRequest } from "../types/Auth";
import { ApiError } from "./errors/ApiError";

export function checkAuth(
  req: WithAuthRequest,
  _: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    next(ApiError.forbidden("Token is missing"));
    return;
  }
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as DecodedUser;
    req.decodedUser = decoded;
    next();
  } catch (error) {
    next(ApiError.forbidden("Invalid token"));
    return;
  }
}
