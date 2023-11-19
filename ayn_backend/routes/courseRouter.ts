import express from 'express';

import coursesController from '../controllers/courses';
import { validate } from '../middlewares/validate';
import { courseSchema } from '../schemas/courseSchema';

const coursesRouter = express.Router();

coursesRouter.get('/', coursesController.getAllCourses);

export default coursesRouter;