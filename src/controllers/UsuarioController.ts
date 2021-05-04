import { Request, Response } from "express";
import usuarioSchema from "../models/UsuarioSchema";

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

    const validacaoUsername = await usuarioSchema.findOne({
      username: username,
    });
    if (validacaoUsername != null) {
      response.status(666).json({ msg: "ESSE USUARIO JA EXISTE!!" });
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
      const username = await usuarioSchema.findOneAndDelete({ _id: id });
      if (username === null) {
        response.status(404).json({ msg: "Esse usuario não existe!" });
      }
      response.status(200).json({ msg: "Usuario deletado com sucesso!!" });
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async editar(request: Request, response: Response) {
    const { id } = request.params;
    const { username, senha } = request.body;
    try {
      const usuario = await usuarioSchema.findOneAndUpdate(
        { _id: id },
        { username, senha }
      );
      if (usuario === null) {
        response.status(404).json({ msg: "Esse usuario não existe!" });
      }
      response.status(200).json({ msg: "Usuario editado com sucesso!!" });
      console.log({ username, senha });
    } catch (error) {
      response.status(400).json(error);
    }
  }
}
export { UsuarioController };