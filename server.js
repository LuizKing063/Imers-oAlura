import express from "express";
import routs from "./src/routs/postsRouts.js";

const app = express();
app.use(express.static("uploads"))
routs(app)
// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor escutando na porta 3000!");
});