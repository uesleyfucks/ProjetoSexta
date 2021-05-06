import {Router} from "express";
import {UsuarioController} from "../controllers/UsuarioController";
import {ReceitaController} from "../controllers/ReceitaController";
import {PaisController} from "../controllers/PaisController";

const router = Router();
const usuarioController = new UsuarioController();
const receitaController = new ReceitaController();
const paisController = new PaisController();

export {router};

//---------Usuario--Receita--País--------

//Favoritos
router.post("/usuario/adicionar-favorito/:id/:idUsuario", usuarioController.adicionarFavorito);
router.post("/usuario/remover-favorito/:id/:idUsuario", usuarioController.removerFavorito);

//Listar
router.get("/usuario/listar-usuario", usuarioController.listar);
router.get("/receita/listar-receita", receitaController.listar);
router.get("/pais/listar-pais", paisController.listar);

//Buscar Por ID
router.get("/usuario/listar-usuario/:id", usuarioController.buscarPorId);
router.get("/receita/listar-receita/:id", receitaController.buscarPorId);
router.get("/pais/listar-pais/:id", paisController.buscarPorId);

//Cadastrar
router.post("/usuario/cadastrar-usuario", usuarioController.cadastrar);
router.post("/receita/cadastrar-receita", receitaController.cadastrar);
router.post("/pais/cadastrar-pais", paisController.cadastrar);
//receita dentro de pais
router.post("/pais/cadastrar-receita/:id/:idPais", paisController.cadastrarReceita);

//Editar
router.put("/usuario/editar-usuario/:id", usuarioController.editar);
router.put("/receita/editar-receita/:id", receitaController.editar);
router.put("/pais/editar-pais/:id", paisController.editar);

//Deletar
router.delete("/usuario/deletar-usuario/:id", usuarioController.deletar);
router.delete("/receita/deletar-receita/:id", receitaController.deletar);
router.delete("/pais/deletar-pais/:id", paisController.deletar);