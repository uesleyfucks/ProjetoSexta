import {Router} from "express";
import {UsuarioController} from "../controllers/UsuarioController";
import {ReceitaController} from "../controllers/ReceitaController";

const router = Router();
const usuarioController = new UsuarioController();
const receitaController = new ReceitaController();

export {router};

//---------Usuario--Receita----------

//Favoritos
router.post("/usuario/adicionar-favorito/:id/:idUsuario", usuarioController.adicionarFavorito);
router.post("/usuario/remover-favorito/:id/:idUsuario", usuarioController.removerFavorito);

//Listar
router.get("/usuario/listar-usuario", usuarioController.listar);
router.get("/receita/listar-receita", receitaController.listar);

//Buscar Por ID
router.get("/usuario/listar-usuario/:id", usuarioController.buscarPorId);
router.get("/receita/listar-receita/:id", receitaController.buscarPorId);

//Cadastrar
router.post("/usuario/cadastrar-usuario", usuarioController.cadastrar);
router.post("/receita/cadastrar-receita", receitaController.cadastrar);

//Editar
router.put("/usuario/editar-usuario/:id", usuarioController.editar);
router.put("/receita/editar-receita/:id", receitaController.editar);

//Deletar
router.delete("/usuario/deletar-usuario/:id", usuarioController.deletar);
router.delete("/receita/deletar-receita/:id", receitaController.deletar);

