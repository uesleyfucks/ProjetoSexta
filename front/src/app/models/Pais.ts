import { Receita } from './Receita';

export class Pais{
    _id? : string;
    nomePais! : String;
    urlFotoPais! : String;
    receitas?: Receita[];
    createdAt?: Date;
    updatedAt?: Date;
}

