import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config";

import { apiErrorHandler} from './middlewares/apiErrorHandler';
import { routeNotFound } from './middlewares/routeNotFound';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
const mongoURL = process.env.MONGO_URI as string;
mongoose.connect(mongoURL).then(() => console.log("Connected!"));

// Routes
app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use(apiErrorHandler);
app.use(routeNotFound);
app.listen(PORT, () => {
    console.log(`👀 Server is running on localhost:${PORT}`);
});