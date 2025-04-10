import express from "express";
import cursoRoutes from "./routes/cursoRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/cursos", cursoRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
