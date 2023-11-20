import mongoose from 'mongoose';

import PaymentRepo from '../models/PaymentModel';
import UserRepo from '../models/UserModel';
import CourseRepo from '../models/CourseModel';
import { Payment } from '../types/Payment';

async function findAll() {
    const payments = await PaymentRepo.find().exec();
    return payments;
}

async function findOne(index: string) {
    const id = new mongoose.Types.ObjectId(index);
    const payment = await PaymentRepo.findById(id);
    return payment;
}

async function addPayment(newPayment: Payment) {
    const { userId, coursesId, method, bankName, accountNumber } = newPayment;
    const user = await UserRepo.findById(userId);
    if (!user) {
        return null;
    }
    const findCourse = await CourseRepo.find({ coursesId });
    if (!findCourse) {
        return null;
    }
    const existingCourses = findCourse.filter((course) => {
        coursesId.includes(course._id.toString());
    });
    const createPayment = await Promise.all(
        existingCourses.map(async (course) => {
            const paymentDate = new Date();
            const existingPayment = await PaymentRepo.findOne({
                userId,
                coursesId: course._id,
            });
            if (!existingPayment) {
                const cretedPayment = new PaymentRepo({
                    userId,
                    coursesId: course._id,
                    method,
                    bankName,
                    accountNumber,
                    paymentDate,
                });
                await cretedPayment.save();
                await CourseRepo.findByIdAndUpdate(
                    course._id, {
                        paymentStatus: "success",
                        paymentId: cretedPayment._id,
                    });
                return cretedPayment;
            }
        })
    );
    return createPayment.filter(Boolean);
}

export default {
    findAll,
    findOne,
    addPayment,
};