import { Request, Response } from "express";
import receitaSchema from "../models/ReceitaSchema";

class ReceitaController {
  //------RECEITAS------

  async listar(request: Request, response: Response) {
    const receita = await receitaSchema.find();
    response.status(200).json(receita);
  }

  async buscarPorId(request: Request, response: Response) {
    const { id } = request.params;
    // const usuario  = await UsuarioSchema.findById(id);
    // const usuario  = await UsuarioSchema.find({ _id : id });
    try {
      const receita = await receitaSchema.findOne({ _id: id });
      if (receita === null) {
        response.status(404).json({ msg: "Essa receita não existe!" });
      }
      response.status(200).json(receita);
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async cadastrar(request: Request, response: Response) {
    const novaReceita = request.body;
    const { nomeReceita } = request.body;

    const validacaoNomeReceita = await receitaSchema.findOne({
        nomeReceita: nomeReceita,
    });
    if (validacaoNomeReceita != null) {
      response.status(409).json({ msg: "ESSA RECEITA JÁ EXISTE!!" });
    } else {
      try {
        await receitaSchema.create(novaReceita);
        response.status(201).json(novaReceita);
      } catch (error) {
        response.status(400).json(error);
      }
    }
  }

  async deletar(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const nomeReceita = await receitaSchema.findOneAndDelete({ _id: id });
      if (nomeReceita === null) {
        response.status(404).json({ msg: "Essa receita não existe!" });
      }
      response.status(200).json({ msg: "Receita deletado com sucesso!!" });
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async editar(request: Request, response: Response) {
    const { id } = request.params;
    const { nomeReceita, ingrediente, modoPreparo, tempoPreparo, rendimento } = request.body;
    try {
      const receita = await receitaSchema.findOneAndUpdate(
        { _id: id },
        { nomeReceita, ingrediente, modoPreparo, tempoPreparo, rendimento }
      );
      if (receita === null) {
        response.status(404).json({ msg: "Essa receita não existe!" });
      }
      response.status(200).json({ msg: "Receita editada com sucesso!!" });
      console.log({ nomeReceita, ingrediente, modoPreparo, tempoPreparo, rendimento });
    } catch (error) {
      response.status(400).json(error);
    }
  }
}
export { ReceitaController };