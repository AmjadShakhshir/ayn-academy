import { NextFunction, Request, Response } from "express";
import coursesService from "../../services/coursesService";
import { ApiError } from "../../middlewares/errors/ApiError";

export async function createCourse(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
        const course = req.body;
        const newCourse = await coursesService.createCourse(course);
        res.status(201).json({ newCourse, message: "Course created" });
    }
    catch (error) {
        next(ApiError.resourceNotFound("Cannot add Course"));
    }
}