import express from "express"
import config from "./config"
import usuarios from "./routes/usuario.routes"
const app = express()

//settings 
app.set("port",config.port || 3000)

//middlewares
app.use(express.json())
app.use(usuarios)
app.use(express.urlencoded({ extended: false }));

export default app