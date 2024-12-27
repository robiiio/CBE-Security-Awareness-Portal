import Point from '../models/model.js'
export const getCourse =  async (req, res) =>{
    try{
        const courses = await Point.find();
        res.status(200).json(courses)
    }catch(err){
        res.status(404).json({message: err.message});
    }
} 

export const createCourse = async (req, res) => {
    const post = req.body;
   console.log(post)
    const newPost = new Point(post);
    console.log(newPost)
    try{
        await newPost.save();
        res.status(200).json(newPost)
    }catch(err){
        res.status(409).json({message: err.message});
    }
}
export const getContent = async (req, res) => {
    try{
        const subtitle = await Point.findById(req.params.id);
        console.log(subtitle)
        if (!subtitle) {
            return res.status(404).json({ message: 'Subtitle not found' });
          }
          res.json(subtitle);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
}