import API from "../config/axios";
import {ICreateNote} from "../interfaces/INotas";

export const ListNotaApi = (page: number) => {
    return API.get(`notes/list/${page}`);
}

export const AllNotesAPI = () => {
    return API.get( `notes/all`);
}

export const RegistrarNotaAPI = (newNota: ICreateNote) => {
    return API.post(`notes/new`,newNota);
}

export const getAllStudentAndCycles = () => {
    return API.get(`notes/new`);
}

export const getNoteById = (noteId: number) => {
    return API.get(`notes/`+ noteId);
}

export const actualizarNotaAPI = (newNota: ICreateNote) => {
    return API.put(`notes/edit`,newNota);
}
