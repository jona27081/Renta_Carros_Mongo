import { Document } from "mongoose";

export interface ICarros extends Document {
    readonly placas: string;
    readonly marca: string;
    readonly color: string;
    readonly modelo: string;
    readonly fechaCompra: string;
    readonly rentaDiaria: number;
    readonly distribuidor: string;
}
