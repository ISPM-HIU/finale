import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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
}

seedHouse()
console.log("House initialized")