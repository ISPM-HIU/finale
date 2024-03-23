"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = __importDefault(require("../models/commands"));
const getCommandPrompt_1 = require("../services/getCommandPrompt");
const controller = {
    getAll: async (req, res) => {
        try {
            let data = await commands_1.default.getAll();
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
            let data = await commands_1.default.getOne(id);
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
    create: async (req, res) => {
        let { command_text, user_id } = req.body;
        let command_message = (0, getCommandPrompt_1.getCommandPrompt)(command_text);
        let userId = parseInt(user_id);
        try {
            let user = await commands_1.default.create(command_text, command_message, userId);
            if (user)
                res.status(200).send(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    delete: async (req, res) => {
        let id = parseInt(req.params.id);
        try {
            let data = await commands_1.default.delete(id);
            res.status(200).send("Command delete successfuly");
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    },
};
exports.default = controller;
//# sourceMappingURL=commands.js.map