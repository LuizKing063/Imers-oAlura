import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados utilizando a string de conexão fornecida
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export default async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes"); // Seleciona o banco de dados
    const colecao = db.collection("posts"); // Seleciona a coleção de posts
    return colecao.find().toArray(); // Retorna todos os posts em um array
}