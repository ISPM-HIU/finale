import { Response, Request } from "express"
import model from "../models/house"
import { Prisma, PrismaClient } from "@prisma/client";

import { getCommandPrompt } from "../services/getCommandPrompt"
import { globalSocket } from "../services/socketService"
const prisma = new PrismaClient();
let heures = 0;
let minutes = 0;
let secondes = 0;
let timer1: any = null
let timer2: any = null
async function mettreAJourChronometre1() {
    console.log(`${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`);
    secondes++;
    if (secondes >= 60) {
        secondes = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            heures++;
        }
    }
    await prisma.house.update({
        data: {
            duration1: `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`,
        },
        where: {
            id_house: 1
        }
    }).then((e) => globalSocket.emit("update-materials", e)).catch((err) => console.log(err)
    )
}

async function mettreAJourChronometre2() {
    console.log(`${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`);
    secondes++;
    if (secondes >= 60) {
        secondes = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            heures++;
        }
    }
    await prisma.house.update({
        data: {
            duration2: `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`,
        },
        where: {
            id_house: 1
        }
    }).then((e) => globalSocket.emit("update-materials", e)).catch((err) => console.log(err)
    )
}


const controller = {
    update: async (req: Request, res: Response) => {
        let {
            command_text
        } = req.body
        let command_message = getCommandPrompt(command_text)
        console.log("commande", command_message);

        switch (command_message) {
            case 'allumer led1':
                try {
                    let house = await model.update(
                        "led1",
                        true
                    )
                    heures = 0;
                    minutes = 0;
                    secondes = 0;
                    timer1 = setInterval(mettreAJourChronometre1, 1000);

                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            case "eteindre led1":
                try {
                    let house = await model.update(
                        "led1",
                        false
                    )

                    clearInterval(timer1)
                    await prisma.house.update({
                        data: {
                            duration1: ``,
                        },
                        where: {
                            id_house: 1
                        }
                    }).then((e) => console.log(e)
                    ).catch((err) => console.log(err))
                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            case 'allumer led2':
                try {
                    let house = await model.update(
                        "led2",
                        true
                    )
                    timer2 = setInterval(mettreAJourChronometre2, 1000);

                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            case "eteindre led2":
                try {
                    let house = await model.update(
                        "led2",
                        false
                    )
                    clearInterval(timer2)
                    await prisma.house.update({
                        data: {
                            duration2: ``,
                        },
                        where: {
                            id_house: 1
                        }
                    }).then((e) => console.log(e)
                    ).catch((err) => console.log(err))
                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            case "ouvrir fenêtre1":
                try {
                    let house = await model.update(
                        "fenetre1",
                        true
                    )
                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            case "fermer fenêtre1":
                try {
                    let house = await model.update(
                        "fenetre1",
                        false
                    )
                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            case "ouvrir fenêtre2":
                try {
                    let house = await model.update(
                        "fenetre2",
                        true
                    )
                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            case "fermer fenêtre2":
                try {
                    let house = await model.update(
                        "fenetre2",
                        false
                    )
                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            case "ouvrir porte1":
                try {
                    let house = await model.update(
                        "porte1",
                        true
                    )
                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            case "fermer porte1":
                try {
                    let house = await model.update(
                        "porte1",
                        false
                    )
                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            case "ouvrir porte2":
                try {
                    let house = await model.update(
                        "porte2",
                        true
                    )
                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            case "fermer porte2":
                try {
                    let house = await model.update(
                        "porte2",
                        false
                    )
                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            case "activer securité":
                try {
                    let house = await model.update(
                        "securite",
                        true
                    )
                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            case "desactiver securité":
                try {
                    let house = await model.update(
                        "securite",
                        false
                    )
                    if (house) {
                        res.status(200).send(house)
                        globalSocket.emit("update-materials", house)
                    }
                }
                catch (error: any) {
                    console.log(error)
                    res.status(500).send(error)
                }
                break;
            default:
                console.log('default')
                break

        }
    },
    //controllers en cas d'effraction
    updateMaterial: (req: Request, res: Response) => {
        let { materiel, status } = req.body
        let value = status != null ? status : true
        console.log(value)
        try {
            let house = model.update(
                materiel,
                value
            )
            if (house)
                res.status(200).send(house)
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    },
    getAll: async (req: Request, res: Response) => {
        try {
            let data = await model.getAll()

            if (data)
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

            if (data)
                res.status(200).send(data)
            else
                res.status(200).send({})
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error.message)
        }
    },
    getSecurity: async (req: Request, res: Response) => {
        let id = parseInt(req.params.id)

        try {
            let data = await model.getOne(id)

            if (data) {
                let declencher = false
                if (
                    data.securite && (data.porte1 ||
                        data.porte2 ||
                        data.fenetre1 ||
                        data.fenetre2)
                )
                    declencher = true;
                res.status(200).send({ "declencher": declencher })
            }
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
            user_id
        } = req.body
        let userId = parseInt(user_id)
        try {
            let house = await model.create(
                userId
            )
            if (house)
                res.status(200).send(house)
        }
        catch (error: any) {
            console.log(error)
            res.status(500).send(error)
        }
    }
}

export default controller