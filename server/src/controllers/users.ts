import { Response, Request } from "express"
import { generateToken } from '../services/services'
import bcrypt from "bcrypt"
import model from "../models/users"

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
        let u_id = parseInt(req.params.u_id)

        try { 
            let data = await model.getOne(u_id)
           
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
    getByEmail:  async (req: Request, res: Response) => {
        let { u_email } = req.params

        try { 
            let data = await model.getByEmail(u_email)

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
    search:  async (req: Request, res: Response) => {
        let { query, u_id } = req.body

        try { 
            let data = await model.search(String(query), parseInt(u_id))

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
    getLogin: async (req: Request, res: Response) => {
        let { u_email, u_password } = req.body

        try {
            let user = await model.getByEmail(u_email)
            if(user) {
                let psw = String(user.u_password)
                bcrypt.compare(u_password, psw, function(err: any, verified: any){
                    if (err) return res.status(403).send("Incorrect Password");
                    if (verified) {
                        const token = generateToken(user?.u_id , user?.u_email);
                        res.send({
                            user,
                            token
                        });
                    }
                    else {
                        res.status(403).send("Incorrect Password")
                    }
                })
            }
            else {
                res.status(500).send("This user doesn't exist")
            }
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    create: async (req: Request, res: Response) => {
        let { u_name, u_last_name, u_email, u_password } = req.body

        try {
            let find = await model.getByEmail(u_email)
            if(find) {
                res.status(403).send("This email is already in use")
            }
            else {
                let saltRounds = 10
                bcrypt.hash(u_password, saltRounds, async function(err: any, hash: any) {
                    if(err){
                        res.status(403).send("Registration failed")
                    }
                    else {
                        let user = await model.create(u_name, u_last_name, u_email, hash)
                        if(user) {
                            let token = generateToken(user.u_id, user.u_email)
                            let response  = {
                                user,
                                token
                            }
                            res.status(200).send(response)
                        }
                        else res.status(500).send("Registration failed")
                    }
                })
            }
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    update: async (req: Request, res: Response) => {
        let { u_name, u_last_name, u_email } = req.body
        let u_id = parseInt(req.body.u_id)
        try { 

            let data = await model.update(u_name, u_last_name, u_email, u_id)
            res.status(200).send(data)
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
    delete: async (req: Request, res: Response) => {
        let u_id = parseInt(req.params.u_id)

        try { 
            let data = await model.delete(u_id)
            res.status(200).send(data)
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
}

export default controller