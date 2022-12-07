import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegistroAlquilerNoDevueltoDto } from './dto/create-registro_alquiler.dto';
import { UpdateRegistroAlquilerDto } from './dto/update-registro_alquiler.dto';
import { IRegistro } from './entities/registro_alquiler.entity';
import { v4 as uuidv4 } from 'uuid'
import { ValidationMessages } from 'src/helpers/validation.messages.helper';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICarros } from 'src/carros/entities/carro.entity';
import { ICliente } from 'src/clientes/entities/cliente.entity';
import { Registro } from './schema/alquiler.schema';

@Injectable()
export class RegistroAlquilerService {


  constructor(@InjectModel('Registros') private registrosModel: Model<IRegistro>,
    @InjectModel('Carros') private carModel: Model<ICarros>,
    @InjectModel('Cliente') private clienteModel: Model<ICliente>) { }

  async findCliente(id: string):
    Promise<ICliente> {
    const disB = await this.clienteModel.findById(id).exec();
    if (!disB) {
      throw new NotFoundException(ValidationMessages.CLIENTE_NO_ENCONTRADO);
    }
    return disB
  }

  async findCar(placa: string):
    Promise<ICarros> {
    const carB = await this.carModel.findOne({ placas: placa }).exec();
    if (!carB) {
      throw new NotFoundException(ValidationMessages.PLACAS_NO_REGISTRADAS);
    }
    return carB
  }

  async create(createRegistroAlquilerDto: CreateRegistroAlquilerNoDevueltoDto):
    Promise<IRegistro> {
    const carB = this.findCar(createRegistroAlquilerDto.placas);
    const clienteB = this.findCliente(createRegistroAlquilerDto.idClientes);
    if (!carB && !clienteB) {
      throw new NotFoundException(ValidationMessages.PLACAS_NO_REGISTRADAS);
    }

    const newR: Registro = {
      folio: uuidv4(),
      placas: (await carB).placas,
      fechaSalida: new Date().toLocaleDateString(),
      nombreClientes: (await clienteB).nombre,
      email: (await clienteB).email,
      telefono: (await clienteB).telefono,
      fechaEntrada: "No devuelto"
    }
    const rF = await new this.registrosModel(newR)
    return rF.save()
  }

  async findAll():
    Promise<IRegistro[]> {
    const clienteData = await this.registrosModel.find();
    if (!clienteData || clienteData.length == 0) {
      throw new NotFoundException(ValidationMessages.INFORMACION_NO_ENCONTRADA);
    }
    return clienteData;
  }

  async findOne(folio: string):
    Promise<IRegistro> {
    const r = await this.registrosModel.findById(folio);
    if (!r) {
      throw new NotFoundException(ValidationMessages.REGISTRO_NO_ENCONTRADO)
    }
    return r
  }

  async remove(folio: string):
    Promise<IRegistro> {
    const r = await this.registrosModel.findByIdAndRemove(folio);
    if (!r) {
      throw new NotFoundException(ValidationMessages.REGISTRO_NO_ENCONTRADO)
    }
    return r
  }

  async checkout(id: string):
    Promise<IRegistro> {
    const check = new Date().toLocaleDateString()
    const rF = await this.registrosModel.findOneAndUpdate({_id: id} , { fechaEntrada: check}, { new: true});
    return rF;
  }
}
