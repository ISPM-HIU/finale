"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services/services");
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = __importDefault(require("../models/users"));
const controller = {
    getAll: async (req, res) => {
        try {
            let data = await users_1.default.getAll();
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
        let u_id = parseInt(req.params.u_id);
        try {
            let data = await users_1.default.getOne(u_id);
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
    getByEmail: async (req, res) => {
        let { u_email } = req.params;
        try {
            let data = await users_1.default.getByEmail(u_email);
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
    search: async (req, res) => {
        let { query, u_id } = req.body;
        try {
            let data = await users_1.default.search(String(query), parseInt(u_id));
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
    getLogin: async (req, res) => {
        let { u_email, u_password } = req.body;
        try {
            let user = await users_1.default.getByEmail(u_email);
            if (user) {
                let psw = String(user.u_password);
                bcrypt_1.default.compare(u_password, psw, function (err, verified) {
                    if (err)
                        return res.status(403).send("Incorrect Password");
                    if (verified) {
                        const token = (0, services_1.generateToken)(user === null || user === void 0 ? void 0 : user.u_id, user === null || user === void 0 ? void 0 : user.u_email);
                        res.send({
                            user,
                            token
                        });
                    }
                    else {
                        res.status(403).send("Incorrect Password");
                    }
                });
            }
            else {
                res.status(500).send("This user doesn't exist");
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    create: async (req, res) => {
        let { u_name, u_last_name, u_email, u_password } = req.body;
        try {
            let find = await users_1.default.getByEmail(u_email);
            if (find) {
                res.status(403).send("This email is already in use");
            }
            else {
                let saltRounds = 10;
                bcrypt_1.default.hash(u_password, saltRounds, async function (err, hash) {
                    if (err) {
                        res.status(403).send("Registration failed");
                    }
                    else {
                        let user = await users_1.default.create(u_name, u_last_name, u_email, hash);
                        if (user) {
                            let token = (0, services_1.generateToken)(user.u_id, user.u_email);
                            let response = {
                                user,
                                token
                            };
                            res.status(200).send(response);
                        }
                        else
                            res.status(500).send("Registration failed");
                    }
                });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    update: async (req, res) => {
        let { u_name, u_last_name, u_email } = req.body;
        let u_id = parseInt(req.body.u_id);
        try {
            let data = await users_1.default.update(u_name, u_last_name, u_email, u_id);
            res.status(200).send(data);
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    },
    delete: async (req, res) => {
        let u_id = parseInt(req.params.u_id);
        try {
            let data = await users_1.default.delete(u_id);
            res.status(200).send(data);
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    },
};
exports.default = controller;
//# sourceMappingURL=users.js.map