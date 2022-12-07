import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ValidationMessages } from 'src/helpers/validation.messages.helper';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ICliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {

  constructor(@InjectModel('Cliente') private clienteModel: Model<ICliente>) { }

  async create(createClienteDto: CreateClienteDto):
    Promise<ICliente> {
    const newCliente = await new this.clienteModel(createClienteDto);
    return newCliente.save();
  }

  async findAll():
    Promise<ICliente[]> {
    const clienteData = await this.clienteModel.find();
    if (!clienteData || clienteData.length == 0) {
      throw new NotFoundException(ValidationMessages.INFORMACION_NO_ENCONTRADA);
    }
    return clienteData;
  }


  async findOne(clienteId: string):
    Promise<ICliente> {
    const cliente = await this.clienteModel.findById(clienteId).exec();
    if (!cliente) {
      throw new NotFoundException(ValidationMessages.CLIENTE_NO_ENCONTRADO);
    }
    return cliente;
  }

  async update(clienteId: string, updateClienteDto: UpdateClienteDto):
    Promise<ICliente> {
    const cliente = await this.clienteModel.findByIdAndUpdate(clienteId, updateClienteDto, { new: true });
    if (!cliente) {
      throw new NotFoundException(ValidationMessages.CLIENTE_NO_ENCONTRADO);
    }
    return cliente;
  }


  async remove(clienteId: string):
    Promise<ICliente> {
    const cliente = await this.clienteModel.findByIdAndRemove(clienteId);
    if (!cliente) {
      throw new NotFoundException(ValidationMessages.CLIENTE_NO_ENCONTRADO);
    }
    return cliente;
  }

}
