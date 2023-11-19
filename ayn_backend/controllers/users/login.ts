import { NextFunction, Request, Response } from "express";
import usersService from "../../services/usersService";
import { ApiError } from "../../middlewares/errors/ApiError";

export async function login(req: Request, res: Response, next: NextFunction) {
    const {email, password} = req.body;
    const accessToken = await usersService.logIn(email, password)
    if (!accessToken) {
        next(ApiError.forbidden("Email or password is invalid"))
        return
    }
    res.status(200).json(accessToken);
}
