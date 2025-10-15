import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import SigninHandler from './routes/SIgnin'
import Signuprouter from './routes/Signuproute'
import Studentlistrouter from './routes/Studentlist'
import Addstudentroute from './routes/AddStudent'
import checkstudenthandler from './routes/Checkstudent'
import deleteroute from './routes/delete'
import Editroute from './routes/Edit';
import heatmapdatarouter from './routes/Heatmapdata'
import setcronschedulerouter from './routes/SetCronSchedule';
import  SyncContestrouter from './routes/SyncContest';
import sendmailrouter from './routes/testMail';
import Exportrouter from './routes/export'
import FeedbackRoute from "./routes/Feedback";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",SigninHandler)
app.use("/api",Signuprouter)
app.use("/api",Studentlistrouter)
app.use("/api",Addstudentroute)
app.use("/api",checkstudenthandler)
app.use("/api",deleteroute)
app.use("/api",Editroute)
app.use("/api",heatmapdatarouter )
app.use("/api",setcronschedulerouter)
app.use("/api",SyncContestrouter)
app.use("/api",sendmailrouter)
app.use("/api",Exportrouter )
app.use("/api", FeedbackRoute);
// console.log("MongoDB URI:", process.env.MONGODB_URI); // This will now match below

const MONGODB_URI = process.env.MONGODB_URI; // ✅ Correct variable name
const mongoconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);

        console.log('Connected to MongoDB successfully!');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

mongoconnect();


app.listen(3000, () => {
    console.log('🚀 Server started on http://localhost:3000');
  });
