import { NextFunction, Request, Response } from "express";
import usersService from "../../services/usersService";
import { ApiError } from "../../middlewares/errors/ApiError";

export async function signup(req: Request, res: Response, next: NextFunction) {
  const { name, email, password } = req.body;
    const user = await usersService.signup(name, email, password);
    if (!user) {
        next(ApiError.badRequest("User not created"));
        return;
    }
  res.status(200).json({ user, message: "User created" });
}
