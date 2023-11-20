import { Request, Response, NextFunction } from "express";

import paymentService from "../../services/paymentService";
import { ApiError } from "../../middlewares/errors/ApiError";

export async function getAllPayments(
    _: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const payments = await paymentService.findAll();
        res.status(200).json({ payments });
    } catch (error) {
        next(ApiError.resourceNotFound("Payment not found"));
    }
}