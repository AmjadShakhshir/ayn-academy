import mongoose from 'mongoose';

import CourseRepo from '../models/CourseModel';
import { Course, UpdateCourse } from '../types/Course';

async function findAll() {
    const courses = await CourseRepo.find().exec();
    return courses;
}

async function findOne(index: string) {
    const id = new mongoose.Types.ObjectId(index);
    const course = await CourseRepo.findById(id);
    return course;
}

async function addCourse(course: Course) {
    const newCourse = new CourseRepo(course);
    await newCourse.save();
    return newCourse;
}

async function updateCourse(index: string, course: UpdateCourse) {
    const updatedCourse = await CourseRepo.findOneAndUpdate(
        { _id: index },
        course,
        { new: true }
    );
    return updatedCourse;
}

async function deleteCourse(index: string) {
    const deletedCourse = await CourseRepo.findOneAndDelete({ _id: index });
    return deletedCourse;
}

export default {
    findAll,
    findOne,
    addCourse,
    updateCourse,
    deleteCourse,
};