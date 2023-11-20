import express from 'express';

import paymentController from '../controllers/payment';

const paymentRouter = express.Router();

paymentRouter.get('/', paymentController.getAllPayments);
paymentRouter.get('/:paymentId', paymentController.getSinglePayment);

export default paymentRouter;