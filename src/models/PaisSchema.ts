import { model, Schema } from "mongoose";

const paisSchema = new Schema(
  {
    
    
    nomePais: {
      type: String,
      required: [true, "O campo nome do País é obrigatório!!!"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("pais",paisSchema);