import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../Controller/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({dest: "./uploads", storage})

const routs = (app) => {
    // Permite que o Express entenda requisições com corpo em formato JSON
    app.use(express.json());
    // Rota para obter todos os posts
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routs;