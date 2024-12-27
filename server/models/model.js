import mongoose from "mongoose";

const pointSchema = new mongoose.Schema({
    topic: {
      type: String
    },
    subtitle:{
      type: String
    },
    description: {
      type: String
    },
    points: {
      type: Number
    },
    url: {
      type: String
    },
    createdAt: {
      type: Date,
      default: new Date()
    }
    
  });
  
  
  const Point = mongoose.model('Point', pointSchema);
  export default Point 
