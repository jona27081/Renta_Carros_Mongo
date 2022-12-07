import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Carro {
    @Prop()
    distribuidorId: string;
    @Prop()
    placas: string;
    @Prop()
    marca: string;
    @Prop()
    color: string;
    @Prop()
    modelo: string;
    @Prop()
    fechaCompra: string;
    @Prop()
    rentaDiaria: number;
}

export const CarroSchema = SchemaFactory.createForClass(Carro);