import { Request, Response } from "express";
import usuarioSchema from "../models/UsuarioSchema";
import receitaSchema from "../models/ReceitaSchema";
//import paisSchema from "../models/PaisSchema";

class UsuarioController {
  //------USUARIO------

  async listar(request: Request, response: Response) {
    const usuario = await usuarioSchema.find();
    response.status(200).json(usuario);
  }

  async buscarPorId(request: Request, response: Response) {
    const { id } = request.params;
    // const usuario  = await UsuarioSchema.findById(id);
    // const usuario  = await UsuarioSchema.find({ _id : id });
    try {
      const usuario = await usuarioSchema.findOne({ _id: id });
      if (usuario === null) {
        response.status(404).json({ msg: "Esse usuario não existe!" });
      }
      response.status(200).json(usuario);
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async cadastrar(request: Request, response: Response) {
    const novoUsuario = request.body;
    const { username } = request.body;
    const { email } = request.body;

    const validacaoUsername = await usuarioSchema.findOne({
      username: username,
    });
    const validacaoEmail = await usuarioSchema.findOne({
      email: email,
    });

    if (validacaoUsername != null || validacaoEmail != null) {
      response.status(409).json({ msg: "ESSE USUARIO OU EMAIL JA EXISTEM!!" });
    } else {
      try {
        await usuarioSchema.create(novoUsuario);
        //console.log(novaCarta);
        response.status(201).json(novoUsuario);
      } catch (error) {
        response.status(400).json(error);
      }
    }
  }

  async deletar(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const usuario = await usuarioSchema.findOneAndDelete({ _id: id });
      if (usuario === null) {
        response.status(404).json({ msg: "Esse usuario não existe!" });
      }
      response.status(200).json({ msg: "Usuario deletado com sucesso!!" });
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async editar(request: Request, response: Response) {
    const { id } = request.params;
    const { email, username, senha } = request.body;
    try {
      const usuario = await usuarioSchema.findOneAndUpdate(
        { _id: id },
        { email, username, senha }
      );
      if (usuario === null) {
        response.status(404).json({ msg: "Esse usuario não existe!" });
      }
      response.status(200).json({ msg: "Usuario editado com sucesso!!" });
      console.log({ username, senha, email });
    } catch (error) {
      response.status(400).json(error);
    }
  }

  //FAVORITOS
  async adicionarFavorito(request: Request, response: Response) {
    const { id } = request.params;
    const { idUsuario } = request.params;

    try {
      const receita = await receitaSchema.findOne({ _id: id });
      if (receita === null) {
        response.status(404).json({ msg: "A receita não existe!" });
      } else {
        response.status(200);
        const addReceita = await usuarioSchema.findOneAndUpdate(
          { _id: idUsuario },
          { $addToSet: { favoritos: [receita] } },
          { upsert: true }
        );
        response.json(addReceita);
        //console.log(receita);
        //console.log(addReceita);
      }
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async removerFavorito(request: Request, response: Response) {
    const { id } = request.params;
    const { idUsuario } = request.params;

    try {
      const receita = await receitaSchema.findOne({ _id: id });
      if (receita === null) {
        response.status(404).json({ msg: "A receita não existe!" });
      } else {
        response.status(200);
        const addReceita = await usuarioSchema.findOneAndUpdate(
          { _id: idUsuario },
          { $pullAll: { favoritos: [receita] } }
        );
        response.json(addReceita);
        //console.log(receita);
        //console.log(addReceita);
      }
    } catch (error) {
      response.status(400).json(error);
    }
  }
}
export { UsuarioController };
