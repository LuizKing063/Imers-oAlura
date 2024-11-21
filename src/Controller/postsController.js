import getTodosPosts from "../models/postsModels.js";

export async function listarPosts(req, res) {
    try {
        const posts = await getTodosPosts();
        res.status(200).json(posts); // Envia os posts como resposta
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar posts" });
    }

}   