import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import userRoute from './routes/userRoute.js'

import cron from 'node-cron'
import { checkMedbook } from './mailing/mailing.js'

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'))
app.use(cookieParser());


// Constants
const PORT = process.env.PORT || 3002;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_NAME = process.env.DB_NAME;

// http://localhost:3001/api/user
app.use('/api/user', userRoute);

async function start() {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.lklmd0b.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
        console.log('Server connected with DataBase');
        // cron.schedule("0 0 0 * * *", () => {
        // })
        checkMedbook()
        app.listen(PORT, (req, res) => {
            // var url = req.headers.host + '/' + req.url;
            console.log("Server started on " + PORT);
        })
    } catch (error) {
        console.log(error)
    }
}

start()