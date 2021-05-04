import { model, Schema } from "mongoose";

const receitaSchema = new Schema(
  {
    nomeReceita: {
      type: String,
      required: [true, "O campo NOMERECEITA é obrigatório!!!"],
    },
    ingrediente: {
      type: String,
      required: [true, "O campo INGREDIENTE é obrigatório!!!"],
    },
    modoPreparo: {
        type: String,
        required: [true, "O campo MODOPREPARO é obrigatório!!!"],
    },
    tempoPreparo: {
       type: Number,
       required: [true, "O campo TEMPOPREPARO é obrigatório!!!"],
    },
    rendimento: {
      type: Number,
      required: [true, "O campo RENDIMENTO é obrigatório!!!"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("receita", receitaSchema);