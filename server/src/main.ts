import { Response, Request } from "express"
import express from "express"
import cors from "cors"
import userRoute from './routes/users' 
import commandRoute from './routes/commands'
import houseRoute from './routes/house'
import http from 'http';
import { Server } from "socket.io";
import setGlobalToken from "./services/socketService"

const app = express()

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/',(req:Request, res:Response) => {
  res.send('Hello from Domotique API')
})

// Start the server
const server = http.createServer(app);

// Sockets 
const socketIO = new Server(server, {
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

setGlobalToken(socketIO)

app.use('/api/users', userRoute)
app.use('/api/commands', commandRoute)
app.use('/api/house', houseRoute)

server.listen(9005, () => console.log("Api listen on port 9005"))