import {postModel} from '../models/postModel.js';

const getPosts = async(req, res) => {
    try {
        const posts = await postModel.getPosts();
        console.log("OK:", posts);
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error processing request" });
    }
};

const createPost = async(req, res) => {
    try {
        const post = req.body;

        post.url = post.url || post.img;
        
        if (!post.titulo || !post.url || !post.descripcion) {
            console.error("Error: Missing required fields");
            res.status(400).json({ error: "Missing required fields" });
            return false;
        }

        const newPost = await postModel.createPost(post);
        console.log("OK:", newPost);
        res.status(201).json(newPost);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error processing request" });
    }
};

const updatePostLike = async(req, res) => {
    try {
        const {id} = req.params;

        const updatePostLike = await postModel.updatePostLike(id);

        if (!updatePostLike) {
            console.error("Error: Post not found");
            res.status(404).json({ error: "Post not found" });
            return false;
        }

        console.log("OK:", updatePostLike);
        res.status(200).json(updatePostLike);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error processing request" });
    }
};

const deletePost = async(req, res) => {
    try {
        const {id} = req.params;

        const deletePost = await postModel.deletePost(id);

        if (!deletePost) {
            console.error("Error: Post not found");
            res.status(404).json({ error: "Post not found" });
            return false;
        }

        console.log("OK:", deletePost);
        res.status(200).json(deletePost);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error processing request" });
    }
};

export const postController = { getPosts, createPost, updatePostLike, deletePost };
