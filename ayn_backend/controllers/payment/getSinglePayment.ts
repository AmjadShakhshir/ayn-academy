import { NextFunction, Request, Response } from "express";

import paymentService from "../../services/paymentService";
import { ApiError } from "../../middlewares/errors/ApiError";

export async function getSinglePayment(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const payment = await paymentService.findOne(req.params.id);
        res.status(200).json({ payment });
    } catch (error) {
        next(ApiError.resourceNotFound("Payment not found"));
    }
}