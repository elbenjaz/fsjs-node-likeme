import pool from "../../database/connection.js";

const getPosts = async () => {
    const sql = "SELECT id, titulo, img, descripcion FROM posts";

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

export const postModel = { getPosts, createPost };
