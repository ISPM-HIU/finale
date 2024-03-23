import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const model = {
  getAll: async () => {
    let result = await prisma.commands.findMany();
    return result;
  },
  getOne: async (id: number) => {
    let result = await prisma.commands.findUnique({
      where: { id: Number(id) },
    });

    return result;
  },
  create: async (
    command_text: string,
    command_message: string,
    userId: number
  ) => {
    const result = await prisma.commands.create({
      data: {
        command_text,
        command_message,
        user: {
          connect: { u_id: userId },
        },
      },
      include: {
        user: true
      }
    });
    return result;
  },
  delete: async (id: number) => {
    let result = await prisma.commands.delete({
      where: { id: Number(id) },
    });

    return result;
  },
};

export default model;
