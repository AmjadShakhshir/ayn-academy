import express from 'express';

import paymentController from '../controllers/payment';
import { validate } from '../middlewares/validate';
import { paymentSchema } from '../schemas/paymentSchema';

const paymentRouter = express.Router();

paymentRouter.get('/', paymentController.getAllPayments);
paymentRouter.get('/:paymentId', paymentController.getSinglePayment);
paymentRouter.post('/', validate(paymentSchema) ,paymentController.createPayment);

export default paymentRouter;