import { model, Schema } from "mongoose";

const usuarioSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "O campo USERNAME é obrigatório!!!"],
    },
    senha: {
      type: String,
      required: [true, "O campo SENHA é obrigatório!!!"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("usuario", usuarioSchema);
