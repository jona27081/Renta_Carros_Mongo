import { IsString, Length } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages.helper";

export class CreateRegistroAlquilerNoDevueltoDto {
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 10, {message: ValidationMessages.TAMAÑO_CADENA})
    placas: string;
    @IsString({message: ValidationMessages.ES_CADENA})
    @Length(1, 80, {message: ValidationMessages.TAMAÑO_CADENA})
    idClientes: string;
}
