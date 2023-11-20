import { NextFunction, Request, Response } from "express";

import CoursesService from "../../services/coursesService";
import { ApiError } from "../../middlewares/errors/ApiError";

export async function updateCourse(
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
            const updatedCourse = await CoursesService.updateCourse(id, req.body);
            res.status(200).json({ updatedCourse, message: "Course updated" });
        } catch (error) {
            next(ApiError.resourceNotFound("Course not found"));
        }
}