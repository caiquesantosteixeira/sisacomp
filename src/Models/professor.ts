import { materia } from "./materia";
import { turma } from "./turma";

export class professor{
    idProfessor : number;
    nome :string;
    cpf :string;
    telefone :string;
    senha :string;
    ativo:number;
    materia:materia;
    turma:turma;
}