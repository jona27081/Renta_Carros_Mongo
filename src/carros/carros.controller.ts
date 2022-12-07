import { Controller, Get, Post, Body, Param, Delete, Patch} from '@nestjs/common';
import { CarrosService } from './carros.service';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';

@Controller('carros')
export class CarrosController {
  constructor(private readonly carrosService: CarrosService) {}

  @Post()
  async create(@Body() createCarDto: CreateCarroDto) {
      const newCar = await this.carrosService.create(createCarDto);
      return newCar
  }

  @Get()
  async findAll() {
      const car = await this.carrosService.findAll();
      return car
  }

  @Get('/:id')
  async findOne(@Param('id') carId: string) {
      const car = await this.carrosService.findOne(carId);
      return car
  }

  @Patch('/:id')
  async update(@Param('id') carId: string, @Body() updateCarroDto: UpdateCarroDto) {
      const updateCliente = await this.carrosService.update(carId, updateCarroDto);
      return updateCliente
  }

  @Delete(':id')
  async remove(@Param('id') carId: string) {
      const car = await this.carrosService.remove(carId);
      return car
  }
}
