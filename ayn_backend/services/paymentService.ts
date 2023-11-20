import PaymentRepo from '../models/PaymentModel';

async function findAll() {
    const payments = await PaymentRepo.find().exec();
    return payments;
}

export default {
    findAll
};