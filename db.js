import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const dbHOST = process.env.DBHOST;
mongoose.set("strictQuery", false)
mongoose.connect(dbHOST)
    .then(() => {
        console.log('MongoDB Connnected...')
    }).catch((err) => {
        console.log('Error while Mongo Conn..', err);
    })