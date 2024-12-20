import { getTodosPosts, criarPost, atualizarPost } from "../models/postsModels.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiServices.js";

export async function listarPosts(req, res) {
    try {
        const posts = await getTodosPosts();
        res.status(200).json(posts); // Envia os posts como resposta
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar posts" });
    }

}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;

    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Falha na requisição" })
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        img_Url: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imgAtualizada = `uploads/${postCriado.insertedId}.jpg`
        fs.renameSync(req.file.path, imgAtualizada)
        res.status(200).json(postCriado);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Falha na requisição" })
    }
}

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImg = `http://localhost:3000/${id}.jpg`
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.jpg`)
        const descricao = await gerarDescricaoComGemini(imgBuffer)

        const post = {
            img_Url: urlImg,
            descricao: descricao,
            alt: req.body.alt
        }
        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Falha na requisição" })
    }
}