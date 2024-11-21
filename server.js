import express from "express";
import routs from "./src/routs/postsRouts.js";

const app = express();
routs(app)
// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor escutando na porta 3000!");
});

// Função para encontrar um post pelo ID
function buscarPostID(id) {
  // Procura o post no array de posts (simplificado para este exemplo)
  return posts.findIndex((post) => post.id === Number(id));
}