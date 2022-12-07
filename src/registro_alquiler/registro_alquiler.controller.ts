import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RegistroAlquilerService } from './registro_alquiler.service';
import { CreateRegistroAlquilerNoDevueltoDto } from './dto/create-registro_alquiler.dto';


@Controller('registros')
export class RegistroAlquilerController {
  constructor(private readonly registroAlquilerService: RegistroAlquilerService) {}

  @Post()
  async create(@Body() createRegistroAlquilerDto: CreateRegistroAlquilerNoDevueltoDto) {
    const newRegistro = this.registroAlquilerService.create(createRegistroAlquilerDto);
    return newRegistro
  }

  @Get()
  findAll() {
    const dataRegistro = this.registroAlquilerService.findAll();
    return dataRegistro
  }

  @Get(':folio')
  async findOne(@Param('folio') folio: string) {
    const registro =  this.registroAlquilerService.findOne(folio);
    return registro
  }

  @Delete(':folio')
  async remove(@Param('folio') folio: string) {
    const registro = this.registroAlquilerService.remove(folio);
    return registro
  }

  @Put(':folio')
  async checkout(@Param('folio') folio: string){
    const registro = this.registroAlquilerService.checkout(folio);
    return registro
  }
}


