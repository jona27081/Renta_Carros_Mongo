import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroAlquilerNoDevueltoDto } from './create-registro_alquiler.dto';

export class UpdateRegistroAlquilerDto extends PartialType(CreateRegistroAlquilerNoDevueltoDto) {}
