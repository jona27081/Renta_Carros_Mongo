import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistribuidoresService } from './distribuidores.service';
import { CreateDistribuidorDto } from './dto/create-distribuidor.dto';
import { UpdateDistribuidorDto } from './dto/update-distribuidor.dto';

@Controller('distribuidores')
export class DistribuidoresController {
  constructor(private readonly distribuidoresService: DistribuidoresService) { }

  @Post()
  async create(@Body() createDisDto: CreateDistribuidorDto) {
    const newCliente = await this.distribuidoresService.create(createDisDto);
    return newCliente
  }

  @Get()
  async findAll() {
    const dis = await this.distribuidoresService.findAll();
    return dis
  }

  @Get('/:id')
  async findOne(@Param('id') disId: string) {
    const dis = await this.distribuidoresService.findOne(disId);
    return dis
  }

  @Patch('/:id')
  async update(@Param('id') disId: string, @Body() updateDisDto: UpdateDistribuidorDto) {
    const dis = await this.distribuidoresService.update(disId, updateDisDto);
    return dis
  }

  @Delete(':id')
  async remove(@Param('id') disId: string) {
    const dis = await this.distribuidoresService.remove(disId);
    return dis
  }

}
