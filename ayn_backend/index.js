import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { errorHandler } from './middleware/errorMiddleware';
import courseRoutes from './routes/courseRoutes';
import userRoutes from './routes/userRoutes';
import connectDB from './config/db';

connectDB();
const PORT = 9000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));

app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`👀 Server is running on localhost:${PORT}`);
});
