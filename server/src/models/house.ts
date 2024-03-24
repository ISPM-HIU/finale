import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const model = {
  getAll: async () => {
    let result = await prisma.house.findMany();
    return result;
  },
  getOne: async (id: number) => {
    let result = await prisma.house.findUnique({
      where: { id_house: Number(id) },
    });

    return result;
  },
  create: async (userId: number) => {
    const result = await prisma.house.create({
      data: {
        user: {
          connect: { u_id: 1 },
        },
      },
      include: {
        user: true
      }
    });
    return result;
  },
  update: async (materiel: string, command: boolean,) => {
    let updateData: { [key: string]: any } = {};
    updateData[materiel] = command;

    let result = await prisma.house.update({
        data: updateData,
        where: {
              id_house: 1
          },
    });
    return result;
  },
};

export default model;
