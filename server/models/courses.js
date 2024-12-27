import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    username: {
      type: String,
    },
    email: {
      type: String, 
      unique: true
    },
    percentage:{
      type: Number,
    },
    status:{
      type: String,
    },
    createdAt: {
      type: Date,
      default: new Date()
    }
  });
  
  const Course = mongoose.model('Course', courseSchema);
  
export default Course;
  