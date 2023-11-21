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
    const findCourse = await CourseRepo.find({ userId });
    if (!findCourse) {
        return null;
    }
    const existingCourses = findCourse.filter((course) => {
        return  coursesId.includes(course._id.toString());
    });
    const createdPayments = await Promise.all(
        existingCourses.map(async (course) => {
            const paymentDate = new Date();
            const existingPayment = await PaymentRepo.findOne({
                userId,
                coursesId: course._id,
            });
            if (!existingPayment) {
                const createdPayment = new PaymentRepo({
                    userId,
                    coursesId: course._id,
                    method,
                    bankName,
                    accountNumber,
                    paymentDate,
                });
                await createdPayment.save();
                await CourseRepo.findByIdAndUpdate(
                    course._id, {
                        paymentStatus: "success",
                        paymentId: createdPayment._id,
                    });
                return createdPayment;
            }
        })
    );
    return createdPayments.filter(Boolean);
}

export default {
    findAll,
    findOne,
    addPayment,
};