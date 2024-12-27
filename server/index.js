import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/posts.js';
import userRouter from './routes/users.js';
import courses from './routes/courses.js';

const app =  express();
app.use(cors());
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));


app.use('/posts', router);
app.use('/users', userRouter);
app.use('/courses', courses);



const PORT = process.env.PORT || 5000;

async function connectToDatabase(){
    try{
        await mongoose.connect(process.env.CONNECTION_URL );
    }catch(err){
        console.log(err);
    }
}
connectToDatabase();

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
