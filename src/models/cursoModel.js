import prisma from "../../prisma/client.js";

class CursoModel {
  // Criação do Get: busca todos os cursos
  getAll = async () => {
    return await prisma.cursos.findMany();
  };

  // Criação do Get por ID: busca um curso específico
  getById = async (id) => {
    return await prisma.cursos.findUnique({
      where: { id },
    });
  };

// Criação do post: cria um novo curso  
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

  // Criação do Put: atualiza um curso existente
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

  // Criação do Delete por ID: deleta um curso existente por ID
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
