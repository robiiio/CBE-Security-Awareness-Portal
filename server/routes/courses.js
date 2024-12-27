import express from 'express';
import { getCourse, createCourse, getContent } from '../controllers/courses.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/foundations', getCourse)
router.post('/foundations',auth,  createCourse)
router.get('/subtitle/:id', getContent)

export default router