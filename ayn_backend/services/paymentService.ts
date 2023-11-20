import mongoose from 'mongoose';

import PaymentRepo from '../models/PaymentModel';

async function findAll() {
    const payments = await PaymentRepo.find().exec();
    return payments;
}

async function findOne(index: string) {
    const id = new mongoose.Types.ObjectId(index);
    const payment = await PaymentRepo.findById(id);
    return payment;
}

export default {
    findAll,
    findOne,
};