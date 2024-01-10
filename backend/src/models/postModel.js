import pool from "../../database/connection.js";

const getPosts = async () => {
    const sql = "SELECT id, titulo, img, descripcion, likes FROM posts";

    try {
        const posts = await pool.query(sql);
        return posts.rows;
    } catch (error) {
        throw new Error(error);
    }
};

const createPost = async ({ titulo, url, descripcion }) => {
    const sql = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *";

    try {
        const result = await pool.query(sql, [titulo, url, descripcion]);
        return result.rows[0];
    } catch (error) {
        throw new Error(error);
    }
};

const updatePostLike = async (id) => {
    const sql = "UPDATE posts SET likes = likes+1 WHERE id = $1 RETURNING *";

    try {
        const result = await pool.query(sql, [id]);
        return result.rows[0];
    } catch (error) {
        throw new Error(error);
    }
};

const deletePost = async (id) => {
    const sql = "DELETE FROM posts WHERE id = $1 RETURNING *";

    try {
        const result = await pool.query(sql, [id]);
        return result.rows[0];
    } catch (error) {
        throw new Error(error);
    }
};

export const postModel = { getPosts, createPost, updatePostLike, deletePost };
