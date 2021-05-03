import {Router} from "express";
import {UsuarioController} from "../controllers/UsuarioController";

const router = Router();
const usuarioController = new UsuarioController();

export {router};

//---------Usuario------------

//Listar
router.get("/usuario/listar-usuario", usuarioController.listar);

//Buscar Por ID
router.get("/usuario/listar-usuario/:id", usuarioController.buscarPorId);

//Cadastrar
router.post("/usuario/cadastrar-usuario", usuarioController.cadastrar);

//Editar
router.put("/usuario/editar-usuario/:id", usuarioController.editar);

//Deletar
router.delete("/usuario/deletar-usuario/:id", usuarioController.deletar);

