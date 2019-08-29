import { professorMateria } from "./professorMateria";

export class materia{
    public  idMateria:number;
    public  nome:string
    public  idTurma :number;
    public  ativo :number;
    public idMateriaTurma:number;
    public idProfessorMateria:professorMateria;
}