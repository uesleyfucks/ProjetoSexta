import { Request, Response } from "express";
import paisSchema from "../models/PaisSchema";
import receitaSchema from "../models/ReceitaSchema";

class PaisController {
  //País

  async listar(request: Request, response: Response) {
    const pais = await paisSchema.find();
    response.status(200).json(pais);
  }

  async buscarPorId(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const pais = await paisSchema.findOne({ _id: id });
      if (pais === null) {
        response.status(404).json({ msg: "Esse país não existe!" });
      }
      response.status(200).json(pais);
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async cadastrar(request: Request, response: Response) {
    const novoPais = request.body;
    const { nomePais } = request.body;

    const validacaoNomePais = await paisSchema.findOne({
      nomePais: nomePais,
    });
    if (validacaoNomePais != null) {
      response.status(409).json({ msg: "ESSE PAÍS JÁ EXISTE!!" });
    } else {
      try {
        await paisSchema.create(novoPais);
        response.status(201).json(novoPais);
      } catch (error) {
        response.status(400).json(error);
      }
    }
  }

  async deletar(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const nomePais = await paisSchema.findOneAndDelete({ _id: id });
      if (nomePais === null) {
        response.status(404).json({ msg: "Esse país não existe!" });
      }
      response.status(200).json({ msg: "País deletado com sucesso!!" });
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async editar(request: Request, response: Response) {
    const { id } = request.params;
    const { nomePais } = request.body;
    try {
      const pais = await paisSchema.findOneAndUpdate({ _id: id }, { nomePais });
      if (pais === null) {
        response.status(404).json({ msg: "Esse país não existe!" });
      }
      response.status(200).json({ msg: "País editado com sucesso!!" });
      console.log({ nomePais });
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async cadastrarReceita(request: Request, response: Response) {
    const { id } = request.params;
    const { idPais } = request.params;

    try {
      const receita = await receitaSchema.findOne({ _id: id });
      if (receita === null) {
        response.status(404).json({ msg: "A receita não existe!" });
      } else {
        response.status(200);
        const addReceita = await paisSchema.findOneAndUpdate(
          { _id: idPais },
          { $addToSet: { receitas: [receita] } },
        );
        response.json(addReceita);
        //console.log(receita);
        //console.log(addReceita);
      }
    } catch (error) {
      response.status(400).json(error);
    }
  }

  async removerReceita(request: Request, response: Response) {
    const { id } = request.params;
    const { idPais } = request.params;

    try {
      const receita = await receitaSchema.findOne({ _id: id });
      if (receita === null) {
        response.status(404).json({ msg: "A receita não existe!" });
      } else {
        response.status(200);
        const addReceita = await paisSchema.findOneAndUpdate(
          { _id: idPais },
          { $pullAll: { receitas: [receita] } }
        );
        response.json(addReceita);
      }
    } catch (error) {
      response.status(400).json(error);
    }
  }
}
export { PaisController };
