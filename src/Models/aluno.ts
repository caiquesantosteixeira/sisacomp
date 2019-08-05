import { turma } from "./turma";

export class aluno{
    public idAluno :number;
    public  idTurma :number;
    public idResponsavel:number;
    public  nome :string;
    public  cpf:string;
    public  telefone:string
    public turmaDoAluno:turma;
    public ativo:number;
}
            