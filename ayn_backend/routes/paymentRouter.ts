import express from 'express';

import paymentController from '../controllers/payment';

const paymentRouter = express.Router();

paymentRouter.get('/', paymentController.getAllPayments);

export default paymentRouter;