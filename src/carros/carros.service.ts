import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDistribuidores } from 'src/distribuidores/entities/distribuidores.entity';
import { ValidationMessages } from 'src/helpers/validation.messages.helper';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { ICarros } from './entities/carro.entity';
import { Carro } from './schema/carro.schema';

@Injectable()
export class CarrosService {

  constructor(@InjectModel('Carros') private carModel: Model<ICarros>,
    @InjectModel('Distribuidores') private distribuidoresModel: Model<IDistribuidores>) { }



  async findDis(dis: string):
    Promise<IDistribuidores> {
    const disB = await this.distribuidoresModel.findById(dis).exec();
    if(!disB){
      throw new NotFoundException(ValidationMessages.DISTRIBUIDOR_NO_REGISTRADO);
    }
    return disB
  }

  async create(createCarroDto: CreateCarroDto):
    Promise<ICarros> {
    const disB = this.findDis(createCarroDto.distribuidorID);
    if(!disB){
      throw new NotFoundException(ValidationMessages.DISTRIBUIDOR_NO_REGISTRADO);
    }
    const car: Carro = {
      ...createCarroDto,
      fechaCompra: "01/01/2022",
      distribuidorId: (await disB).nombreComercial
    }
    const newCar = await new this.carModel(car);
    return newCar.save();
  }

  async findAll():
    Promise<ICarros[]> {
    const carData = await this.carModel.find();
    if (!carData || carData.length == 0) {
      throw new NotFoundException(ValidationMessages.INFORMACION_NO_ENCONTRADA);
    }
    return carData;
  }

  async findOne(carId: string):
    Promise<ICarros> {
    const car = await this.carModel.findById(carId).exec();
    if (!car) {
      throw new NotFoundException(ValidationMessages.CARRO_NO_REGISTRADO);
    }
    return car;
  }

  async remove(carId: string):
    Promise<ICarros> {
    const car = await this.carModel.findByIdAndRemove(carId);
    if (!car) {
      throw new NotFoundException(ValidationMessages.CARRO_NO_REGISTRADO);
    }
    return car;
  }

  async update(carId: string, updateCarroDto: UpdateCarroDto):
    Promise<ICarros> {
    const disB = this.findDis(updateCarroDto.distribuidorID);
    if(!disB){
      throw new NotFoundException(ValidationMessages.DISTRIBUIDOR_NO_REGISTRADO);
    }
    const carU: Carro = {
      color: updateCarroDto.color,
      fechaCompra: "01/01/2022",
      marca: updateCarroDto.marca,
      modelo: updateCarroDto.modelo,
      rentaDiaria: updateCarroDto.rentaDiaria,
      placas: updateCarroDto.placas,
      distribuidorId: (await disB).nombreComercial
    }
    const car = await this.carModel.findByIdAndUpdate(carId, carU, { new: true });
    if (!car) {
      throw new NotFoundException(ValidationMessages.CLIENTE_NO_ENCONTRADO);
    }
    return car;
  }
}
