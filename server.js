import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma imagem teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante",
        imagem: "https://source.unsplash.com/random/300x200"
    },
    {
        id: 3,
        descricao: "Citação inspiradora",
        imagem: "https://picsum.photos/seed/picsum/300/200"
    },
    {
        id: 4,
        descricao: "Gráfico de dados",
        imagem: "https://placehold.it/300x200"
    },
    {
        id: 5,
        descricao: "Meme engraçado",
        imagem: "https://i.imgur.com/tX1B1qQ.jpg"
    },
    {
        id: 6,
        descricao: "Vídeo curto",
        imagem: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Link para um vídeo do YouTube
    }
];

const app = express();  
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando!");
});

function buscarPostID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostID(req.params.id)
    res.status(200).json(posts[index]);
}); 