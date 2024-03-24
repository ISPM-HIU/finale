"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("./routes/users"));
const commands_1 = __importDefault(require("./routes/commands"));
const house_1 = __importDefault(require("./routes/house"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const socketService_1 = __importDefault(require("./services/socketService"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello from Domotique API');
});
// Start the server
const server = http_1.default.createServer(app);
// Sockets 
const socketIO = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
});
socketIO.on("connection", (socket) => {
    console.log(`user connected!`);
    socket.on("update-materials", async (data) => {
        console.log(data);
        socketIO.emit("update-materials", "sallut daholoo");
    });
    socket.on("disconnect", () => {
        console.log("Disconnected");
    });
});
(0, socketService_1.default)(socketIO);
app.use('/api/users', users_1.default);
app.use('/api/commands', commands_1.default);
app.use('/api/house', house_1.default);
server.listen(9005, () => console.log("Api listen on port 9005"));
//# sourceMappingURL=main.js.map