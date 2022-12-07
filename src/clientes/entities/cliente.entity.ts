import { Document } from "mongoose";

export interface ICliente extends Document{
    readonly id: number;
    readonly nombre: string;
    readonly dirreccion: string;
    readonly telefono: string;
    readonly email: string;
}
