import prisma from "../../prisma/client.js";

class CursoModel {
  getAll = async () => {
    return await prisma.cursos.findMany();
  };

  create = async (title, instrument, level, duration, price, instructor, maxStudents) => {
    return await prisma.cursos.create({
      data: {
        title,
        instrument,
        level,
        duration,
        price,
        instructor,
        maxStudents,
      },
    });
  };

  update = async (id, title, instrument, level, duration, price, instructor, maxStudents) => {
    try {
      const curso = await prisma.cursos.update({
        where: { id },
        data: {
          title,
          instrument,
          level,
          duration,
          price,
          instructor,
          maxStudents,
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
      const cursoDeletada = await prisma.cursos.delete({
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
