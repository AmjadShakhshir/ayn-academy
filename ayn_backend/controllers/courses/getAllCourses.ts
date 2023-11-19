import { Request, Response, NextFunction } from "express";

import { ApiError } from "../../middlewares/errors/ApiError";
import CoursesService from "../../services/coursesService";

export async function getAllCourses(
    _: Request,
    res: Response,
    next: NextFunction
    ) {
    try {
        const courses = await CoursesService.findAll();
        res.status(200).json({ courses });
    } catch (error) {
        next(ApiError.resourceNotFound("Course not found"));
    }
}