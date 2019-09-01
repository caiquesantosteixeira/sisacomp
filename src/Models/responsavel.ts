import { aluno } from "./aluno";

export class responsavel{
    idResponsavel : number;
    nome :string;
    cpf :string;
    endereco :string;
    telefone :string;
    ativo : number;
    senha :string;
    filho:aluno;
}