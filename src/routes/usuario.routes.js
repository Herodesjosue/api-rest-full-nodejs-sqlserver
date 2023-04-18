import {Router} from "express"
import { deleteUsuarios, getUsuarios, postUsuarios, putUsuarios, getUsuariosbyID } from "../controllers/usuario.controller"


const router = Router()
router.get("/usuarios",getUsuarios)
router.post("/usuarios",postUsuarios)
router.delete("/usuarios/:cedula", deleteUsuarios)
router.put("/usuarios/:cedula", putUsuarios)
router.get("/usuarios/:cedula", getUsuariosbyID)

export default router