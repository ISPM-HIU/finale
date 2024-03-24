"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const model = {
    getAll: async () => {
        let result = await prisma.house.findMany();
        return result;
    },
    getOne: async (id) => {
        let result = await prisma.house.findUnique({
            where: { id_house: Number(id) },
        });
        return result;
    },
    create: async (userId) => {
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
    update: async (materiel, command) => {
        let updateData = {};
        updateData[materiel] = command;
        let result = await prisma.house.update({
            data: updateData,
            where: {
                id_house: 2
            },
        });
        return result;
    },
};
exports.default = model;
//# sourceMappingURL=house.js.map