"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const house_1 = __importDefault(require("../models/house"));
const getCommandPrompt_1 = require("../services/getCommandPrompt");
const socketService_1 = require("../services/socketService");
const controller = {
    update: async (req, res) => {
        let { command_text } = req.body;
        let command_message = (0, getCommandPrompt_1.getCommandPrompt)(command_text);
        console.log("commande", command_message);
        switch (command_message) {
            case 'allumer led1':
                try {
                    let house = await house_1.default.update("led1", true);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            case "eteindre led1":
                try {
                    let house = await house_1.default.update("led1", false);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            case 'allumer led2':
                try {
                    let house = await house_1.default.update("led2", true);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            case "eteindre led2":
                try {
                    let house = await house_1.default.update("led2", false);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            case "ouvrir fenêtre1":
                try {
                    let house = await house_1.default.update("fenetre1", true);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            case "fermer fenêtre1":
                try {
                    let house = await house_1.default.update("fenetre1", false);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            case "ouvrir fenêtre2":
                try {
                    let house = await house_1.default.update("fenetre2", true);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            case "fermer fenêtre2":
                try {
                    let house = await house_1.default.update("fenetre2", false);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            case "ouvrir porte1":
                try {
                    let house = await house_1.default.update("porte1", true);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            case "fermer porte1":
                try {
                    let house = await house_1.default.update("porte1", false);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            case "ouvrir porte2":
                try {
                    let house = await house_1.default.update("porte2", true);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            case "fermer porte2":
                try {
                    let house = await house_1.default.update("porte2", false);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            case "activer securité":
                try {
                    let house = await house_1.default.update("securite", true);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            case "desactiver securité":
                try {
                    let house = await house_1.default.update("securite", false);
                    if (house) {
                        res.status(200).send(house);
                        socketService_1.globalSocket.emit("update-materials", house);
                    }
                }
                catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
                break;
            default:
                console.log('default');
                break;
        }
    },
    //controllers en cas d'effraction
    updateMaterial: (req, res) => {
        let { materiel, status } = req.body;
        let value = status != null ? status : true;
        console.log(value);
        try {
            let house = house_1.default.update(materiel, value);
            if (house)
                res.status(200).send(house);
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    getAll: async (req, res) => {
        try {
            let data = await house_1.default.getAll();
            if (data)
                res.status(200).send(data);
            else
                res.status(200).send([]);
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    },
    getOne: async (req, res) => {
        let id = parseInt(req.params.id);
        try {
            let data = await house_1.default.getOne(id);
            if (data)
                res.status(200).send(data);
            else
                res.status(200).send({});
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    },
    getSecurity: async (req, res) => {
        let id = parseInt(req.params.id);
        try {
            let data = await house_1.default.getOne(id);
            if (data) {
                let declencher = false;
                if (data.securite && (data.porte1 ||
                    data.porte2 ||
                    data.fenetre1 ||
                    data.fenetre2))
                    declencher = true;
                res.status(200).send({ "declencher": declencher });
            }
            else
                res.status(200).send({});
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    },
    create: async (req, res) => {
        let { user_id } = req.body;
        let userId = parseInt(user_id);
        try {
            let house = await house_1.default.create(userId);
            if (house)
                res.status(200).send(house);
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
};
exports.default = controller;
//# sourceMappingURL=house.js.map