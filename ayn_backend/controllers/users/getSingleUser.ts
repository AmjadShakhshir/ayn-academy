import { Request, Response, NextFunction } from "express";

import { ApiError } from "../../middlewares/errors/ApiError";
import usersService from "../../services/usersService";

export async function getSingleUser(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
        try {
            const id = req.params.userId;
            const user = await usersService.findOne(id);
            if (!user) {
                next(ApiError.resourceNotFound("User not found"));
                return;
            }
            res.status(200).json({ user, message: "User found" });
        } catch (error) {
            next(ApiError.resourceNotFound("Cannot find single user"));
        }
}