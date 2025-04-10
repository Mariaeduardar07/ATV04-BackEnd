import prisma from "../../prisma/client.js";

class CursoModel {
  getAll = async () => {
    return await prisma.task.findMany();
  };

  create = async (descricao) => {
    return await prisma.task.create({
      data: {
        descricao,
      },
    });
  };

  update = async (id, concluida, descricao) => {
    try {
      const curso = await prisma.task.update({
        where: { id },
        data: {
          concluida: concluida !== undefined ? concluida : true,
          descricao,
        },
      });

      return curso;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const cursoDeletada = await prisma.task.delete({
        where: { id },
      });

      return cursoDeletada;
    } catch (error) {
      console.log("Erro ao deletar a curso!", error);
      throw error;
    }
  };
}
export default new CursoModel();
