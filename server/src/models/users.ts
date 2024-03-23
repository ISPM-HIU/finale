import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const model = {
    getAll: async () => {
        let result = await prisma.users.findMany()
        return result
    },
    getOne: async (u_id : number) => {
        let result = await prisma.users.findUnique({
            where: { u_id: Number(u_id) },
        })
        
        return result 
    },
    getByEmail: async (u_email : string) => {
        let result = await prisma.users.findUnique({
            where: { u_email: String(u_email) },
        })

        return result
    },
    search: async (query : string, u_id:number) => {

        let result = await prisma.users.findMany({
            where: {
                NOT: {
                    u_id: u_id,
                },
                OR: [
                    {
                        u_email: { contains: query }
                    },
                    {
                        u_name: { contains: query }
                    },
                    {
                        u_last_name: { contains: query }
                    }
                ]
            }
        })

        return result
    },
    create: async (u_name:string, u_last_name:string, u_email:string, u_password:string) => {

        const result = await prisma.users.create({
            data: {
                u_name,
                u_last_name,
                u_email, 
                u_password
              },
        })

        return result
    },
    update:  async (u_name:string, u_last_name:string, u_email:string, u_id:number) => {

        const result = await prisma.users.update({
            where: { u_id: Number(u_id) },
            data: {
                u_name,
                u_last_name,
                u_email, 
            },
        })

        return result
    },
    delete: async (u_id : number) => {

        let result = await prisma.users.delete({
            where: { u_id: Number(u_id) },
        })

        return result
    },
}

export default model