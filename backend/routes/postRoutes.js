import express from 'express';
import {getPosts, createPost} from '../src/controllers/postController.js';

const router = express.Router();

router.get('/posts', getPosts);
router.post('/posts', createPost);

export default router;
