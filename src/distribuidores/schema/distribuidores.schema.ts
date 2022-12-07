import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Distribuidores {
    @Prop()
    nombreComercial: string;
    @Prop()
    dirreccion: string;
    @Prop()
    ciudad: string;
    @Prop()
    telefono: string;
    @Prop()
    nombreContacto: string;
}

export const DistribuidoresSchema = SchemaFactory.createForClass(Distribuidores);