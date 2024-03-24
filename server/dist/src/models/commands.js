"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const model = {
    getAll: async () => {
        let result = await prisma.commands.findMany();
        return result;
    },
    getOne: async (id) => {
        let result = await prisma.commands.findUnique({
            where: { id: Number(id) },
        });
        return result;
    },
    create: async (command_text, command_message, userId) => {
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
    delete: async (id) => {
        let result = await prisma.commands.delete({
            where: { id: Number(id) },
        });
        return result;
    },
};
exports.default = model;
//# sourceMappingURL=commands.js.map