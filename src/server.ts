import express from "express";
import {router} from "./config/routes";
import {mongoose} from "./config/database";

const app = express();
const db = mongoose;

console.clear();

//Configuração
app.use(express.json());
app.use(router);

app.listen(4321, () => {
    console.log("O servidor esta rodando na porta 4321")
}); 