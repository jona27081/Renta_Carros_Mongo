import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Cliente {
    @Prop()
    nombre: string;
    @Prop()
    dirreccion: string;
    @Prop()
    telefono: string;
    @Prop()
    email: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);