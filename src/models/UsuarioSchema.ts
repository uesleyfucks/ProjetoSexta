import { model, Schema } from "mongoose";
 
const usuarioSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "O campo EMAIL é obrigatório!!!"],
    },
    username: {
      type: String,
      required: [true, "O campo USERNAME é obrigatório!!!"],
    },
    senha: {
      type: String,
      required: [true, "O campo SENHA é obrigatório!!!"],
    },
    favoritos : [],
  },
  {
    timestamps: true,
  }
);

export default model("usuario", usuarioSchema);
