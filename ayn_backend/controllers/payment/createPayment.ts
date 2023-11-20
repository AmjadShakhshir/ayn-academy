import { Request, Response, NextFunction } from "express";

import paymentService from "../../services/paymentService";
import { ApiError } from "../../middlewares/errors/ApiError";

export async function createPayment(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
        const payment = req.body;
        const newPayment = await paymentService.addPayment(payment);
        res.status(201).json({ newPayment, message: "Payment created" });
    }
    catch (error) {
        next(ApiError.resourceNotFound("Cannot add Payment"));
    }
}