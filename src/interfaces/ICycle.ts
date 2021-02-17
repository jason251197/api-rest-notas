import {ISchedule} from "./ISchedule";
import {ITeacher} from "./ITeacher";

export interface ICycle {
    id?: number;
    name: string;
    enabled: boolean;
    schedule: ISchedule;
    teacher: ITeacher;
}
