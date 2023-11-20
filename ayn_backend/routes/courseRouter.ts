import express from 'express';

import coursesController from '../controllers/courses';
import { validate } from '../middlewares/validate';
import { courseSchema, updateCourseSchema } from '../schemas/courseSchema';

const coursesRouter = express.Router();

coursesRouter.get('/', coursesController.getAllCourses);
coursesRouter.get('/:courseId', coursesController.getSingleCourse);
coursesRouter.post('/', validate(courseSchema), coursesController.createCourse);
coursesRouter.put('/:courseId', validate(updateCourseSchema), coursesController.updateCourse);
coursesRouter.delete('/:courseId', coursesController.deleteCourse);

export default coursesRouter;