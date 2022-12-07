import { Document } from "mongoose";

export interface IRegistro extends Document{
    folio: string;
    placas: string;
    fechaSalida: string;
    fechaEntrada: string;
    nombreClientes: string;
    telefono: string;
    email: string;
}
