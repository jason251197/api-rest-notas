import { ICycle } from "./ICycle";
import { IStudent } from "./IStudent";


export interface INotas {
    id?: number;
    writingnote: number;
    listeningnote: number;
    readingnote: number;
    speakingnote: number;
    middlexexamnote: number;
    finalexamnote: number;
    cycle: ICycle;
    student: IStudent;
}

export interface ICreateNote {
    writingnote: number;
    listeningnote: number;
    readingnote: number;
    speakingnote: number;
    middlexexamnote: number;
    finalexamnote: number;
    cycle_id: number;
    student_id: number;
}
