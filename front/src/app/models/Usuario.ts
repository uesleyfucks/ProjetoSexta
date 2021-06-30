import { Receita } from './Receita';
export class Usuario {
    _id? : string;
    email! : String;
    username! : String;
    senha! : String;
    favoritos?: Receita[];
    createdAt?: Date;
    updatedAt?: Date;
}