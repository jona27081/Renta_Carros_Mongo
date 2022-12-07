import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Registro{
    @Prop()
    folio: string;
    @Prop()
    placas: string;
    @Prop()
    fechaSalida: string;
    @Prop()
    fechaEntrada: string;
    @Prop()
    nombreClientes: string;
    @Prop()
    telefono: string;
    @Prop()
    email: string;
}
export const RegistroSchema = SchemaFactory.createForClass(Registro);