import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config";

import { apiErrorHandler} from './middlewares/apiErrorHandler';
import { routeNotFound } from './middlewares/routeNotFound';
import usersRouter from './routes/userRouter';
import courseRouter from './routes/courseRouter';
import { loggingMiddleware } from './middlewares/logging';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
const mongoURL = process.env.MONGO_URI as string;
mongoose.connect(mongoURL).then(() => console.log("Connected!"));

// Routes
app.use('/api/v1/users', loggingMiddleware, usersRouter);
app.use('/api/v1/courses', loggingMiddleware, courseRouter);

app.use(apiErrorHandler);
app.use(routeNotFound);
app.listen(PORT, () => {
    console.log(`👀 Server is running on localhost:${PORT}`);
});