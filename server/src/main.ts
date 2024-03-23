import { Response, Request } from "express"
import express from "express"
import cors from "cors"
import userRoute from './routes/users' 
import commandRoute from './routes/commands'
import houseRoute from './routes/house'

const app = express()

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/',(req:Request, res:Response) => {
  res.send('Hello from Domotique API')
})

app.use('/api/users', userRoute)
app.use('/api/commands', commandRoute)
app.use('/api/house', houseRoute)

app.listen(9005, () => console.log("Api listen on port 9005"))