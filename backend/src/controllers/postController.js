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

export { getPosts, createPost };
