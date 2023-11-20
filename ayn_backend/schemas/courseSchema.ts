import { z } from "zod";
import mongoose from "mongoose";

export const courseBodySchema = z.object({
    name: z.string().min(3).max(20),
    code: z.string().min(3).max(20),
    description: z.string().min(3).max(200),
    userId: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val)),
}).strict();

export const updatedCourseBodySchema = z.object({
    name: z.string().min(3).max(20).optional(),
    code: z.string().min(3).max(20).optional(),
    description: z.string().min(3).max(200).optional(),
    userId: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val)).optional(),
}).partial().strict();

export const courseSchema = z.object({
    body: courseBodySchema,
});

export const updateCourseSchema = z.object({
    body: updatedCourseBodySchema,
});