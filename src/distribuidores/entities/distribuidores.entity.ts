import { Document } from "mongoose";

export interface IDistribuidores extends Document{
    readonly nombreComercial: string;
    readonly dirreccion: string;
    readonly ciudad: string;
    readonly telefono: string;
    readonly nombreContacto: string;
}
