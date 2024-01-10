import express from 'express';
import {postController} from '../src/controllers/postController.js';
import {errorController} from '../src/controllers/errorController.js';

const router = express.Router();

router.get('/posts', postController.getPosts);
router.post('/posts', postController.createPost);
router.put('/posts/like/:id', postController.updatePostLike);
router.delete('/posts/:id', postController.deletePost);

router.use("*", errorController.error404);

export default router;
