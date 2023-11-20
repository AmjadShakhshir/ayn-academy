import { z } from "zod";
import mongoose from "mongoose";

import { courseSchema } from "../schemas/courseSchema";

export type Course = z.infer<typeof courseSchema>& {
    id: mongoose.Types.ObjectId;
};

export type UpdateCourse = Partial<Course>;