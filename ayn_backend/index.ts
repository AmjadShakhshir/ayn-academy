import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config";
import app from './app';

const PORT = process.env.PORT || 5000;


// Connect to MongoDB
const mongoURL = process.env.MONGO_URI as string;
mongoose.connect(mongoURL).then(() => console.log("Connected!"));

app.listen(PORT, () => {
    console.log(`👀 Server is running on localhost:${PORT}`);
});