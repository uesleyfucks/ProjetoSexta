import { Receita } from './Receita';

export class Pais{
    _id? : string;
    nomePais! : String;
    receitas?: Receita[];
    createdAt?: Date;
    updatedAt?: Date;
}

