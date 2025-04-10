import cursoModel from "../models/cursoModel.js";

class CursoController {
  getAll = async (req, res) => {
    try {
      const curso = await cursoModel.getAll();
      res.json(curso);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar curso" });
    }
  };

  create = async (req, res) => {
    const { title, instrument, level, duration, price, instructor, maxStudents } = req.body;
    // const descricao = req.body.descricao;
    try {
      if (!title) {
        return res.status(400).json({ erro: "Título é obrigatório" });
      }
      if (!instrument) {
        return res.status(400).json({ erro: "Instrumento é obrigatório" });      }
      if (!level) {
        return res.status(400).json({ erro: "Level é obrigatório" });
      }
      if (!duration) {
        return res.status(400).json({ erro: "Duração é obrigatório" });
      }
      if (!price) {
        return res.status(400).json({ erro: "Preço é obrigatório" });
      }
      if (!instructor) {
        return res.status(400).json({ erro: "Instrutor é obrigatório" });
      }
      if (!maxStudents) {
        return res.status(400).json({ erro: "O máximo de alunos é obrigatório" });
      }

      const novoCurso = await cursoModel.create(title, instrument, level, duration, price, instructor, maxStudents);
      res.status(201).json(novoCurso);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar curso" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { title, instrument, level, duration, price, instructor, maxStudents } = req.body;

    try {
      const cursoAtualizada = await cursoModel.update(
        Number(id),
        title,
        instrument,
        level,
        duration,
        price,
        instructor,
        maxStudents
      );

      if (!cursoAtualizada) {
        return res.status(404).json({ erro: "Curso não encontrada!" });
      }

      res.json(cursoAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar curso!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await cursoModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Curso não encontrada" });
      }

      res.status(200).send({ message: "Curso deletada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir curso!" });
    }
  };
}
export default new CursoController();
