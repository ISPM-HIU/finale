import { Response, Request } from "express"
import model from "../models/commands"
import { getCommandPrompt } from "../services/getCommandPrompt"

const controller = {
    getAll: async (req: Request, res: Response) => {
        try {
            let data = await model.getAll()

            if(data)
                res.status(200).send(data)
            else
                res.status(200).send([])
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
    getOne: async (req: Request, res: Response) => {
        let id = parseInt(req.params.id)

        try { 
            let data = await model.getOne(id)
           
            if(data)
                res.status(200).send(data)
            else
                res.status(200).send({})
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
    create: async (req: Request, res: Response) => {
        let { 
            command_text,
            user_id
        } = req.body
        let command_message = getCommandPrompt(command_text)
        let userId = parseInt(user_id)
        try {
            let user = await model.create(
                command_text,
                command_message,
                userId
            )
            if(user)
                res.status(200).send(user)
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    delete: async (req: Request, res: Response) => {
        let id = parseInt(req.params.id)

        try { 
            let data = await model.delete(id)
            res.status(200).send("Command delete successfuly")
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
}

export default controller