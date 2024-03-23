"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const houseinitialData = {
    led1: false,
    led2: false,
    led3: false,
    porte1: false,
    porte2: false,
    fenetre1: false,
    fenetre2: false,
    securite: false,
    userId: 1
};
const seedHouse = async () => {
    await prisma.house.create({
        data: houseinitialData,
    });
};
seedHouse();
console.log("House initialized");
//# sourceMappingURL=seed.js.map