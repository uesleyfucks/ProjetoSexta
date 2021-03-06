import { model, Schema } from "mongoose";

const paisSchema = new Schema(
  {
    nomePais: {
      type: String,
      required: [true, "O campo nome do País é obrigatório!!!"],
    },
    urlFotoPais: {
      type: String,
      required: [true, "O campo url foto do País é obrigatório!!!"],
    },
    receitas : [],
  },
  {
    timestamps: true,
  }
);

export default model("pais",paisSchema);