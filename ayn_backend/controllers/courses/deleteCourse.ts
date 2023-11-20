import { Request, Response, NextFunction } from "express";

import CoursesService from "../../services/coursesService";
import { ApiError } from "../../middlewares/errors/ApiError";


export async function deleteCourse(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
    try {
        const id = req.params.courseId;
        const course = await CoursesService.findOne(id);
        if (!course) {
        next(ApiError.resourceNotFound("Course not found"));
        return;
        }
        await CoursesService.deleteCourse(id);
        res.status(200).json({ message: "Course deleted" });
    } catch (error) {
        next(ApiError.resourceNotFound("Course not found"));
    }
    }