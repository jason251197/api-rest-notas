export interface ILanguage {
  id: number;
  name: string;
  level: string;
}

export interface IClassRoom {
  id: number;
  name: string;
  capacity: number;
}


export interface ISchedule {
  id: number;
  language: ILanguage;
  classRoom: IClassRoom;
}
