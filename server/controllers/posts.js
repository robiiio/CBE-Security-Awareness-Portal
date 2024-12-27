import mongoose from 'mongoose';
import Course from '../models/courses.js'
export const getPosts = async (req, res) => {
    try{
        const courses = await Course.find();
        res.status(200).json(courses)
    }catch(err){
        res.status(404).json({message: err.message});
    }
};
export const createPost = async (req, res) => {
    const post = req.body;
    
    try{ 
        const newPost = new Course(post);
        await newPost.save();
        res.status(200).json(newPost)
    }catch(err){
        res.status(409).json({message: err.message});
    }

};
export const updatedPost = async (req,res) => {
    try{
    const id = req.params.id;
    const {percentage} = req.body;
    console.log(percentage)
   const updatedPost = Course.findByIdAndUpdate(id, {percentage}, { new: true });
   console.log(updatedPost)
   if (!updatedPost) {
    return res.status(404).json({ message: 'Item not found' });
  }
    res.json({ success: true, message: `Updated percentage for item ${id} to ${percentage}%` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
     }
}
