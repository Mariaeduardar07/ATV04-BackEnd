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
    const { descricao } = req.body;
    // const descricao = req.body.descricao;
    try {
      if (!descricao) {
        return res.status(400).json({ erro: "Descrição é obrigatória" });
      }

      const novoCurso = await cursoModel.create(descricao);
      res.status(201).json(novoCurso);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar curso" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { concluida, descricao } = req.body;

    try {
      const cursoAtualizada = await cursoModel.update(
        Number(id),
        concluida,
        descricao
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
