import express from "express";
import { listarPosts } from "../Controller/postsController.js";

const routs = (app) => {
    // Permite que o Express entenda requisições com corpo em formato JSON
    app.use(express.json());
    // Rota para obter todos os posts
    app.get("/posts", listarPosts);
    // Rota para obter um post específico pelo ID
}

export default routs;