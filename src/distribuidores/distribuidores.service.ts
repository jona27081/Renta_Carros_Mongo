import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ValidationMessages } from 'src/helpers/validation.messages.helper';
import { CreateDistribuidorDto } from './dto/create-distribuidor.dto';
import { UpdateDistribuidorDto } from './dto/update-distribuidor.dto';
import { IDistribuidores } from './entities/distribuidores.entity';

@Injectable()
export class DistribuidoresService {
  
  constructor(@InjectModel('Distribuidores') private distribuidoresModel: Model<IDistribuidores>) { }
  
  async create(createDistribuidorDto: CreateDistribuidorDto):
    Promise<IDistribuidores> {
    const newDis = await new this.distribuidoresModel(createDistribuidorDto);
    return newDis.save();
  }

  async findAll():
    Promise<IDistribuidores[]> {
    const disData = await this.distribuidoresModel.find();
    if (!disData || disData.length == 0) {
      throw new NotFoundException(ValidationMessages.INFORMACION_NO_ENCONTRADA);
    }
    return disData;
  }

  async findOne(disId: string):
    Promise<IDistribuidores> {
    const dis = await this.distribuidoresModel.findById(disId).exec();
    if (!dis) {
      throw new NotFoundException(ValidationMessages.DISTRIBUIDOR_NO_REGISTRADO);
    }
    return dis;
  }

  async update(disId: string, updateDistribuidorDto: UpdateDistribuidorDto):
  Promise<IDistribuidores> {
    const dis = await this.distribuidoresModel.findByIdAndUpdate(disId, updateDistribuidorDto, { new: true});
    if (!dis) {
      throw new NotFoundException(ValidationMessages.DISTRIBUIDOR_NO_REGISTRADO);
    }
    return dis;
  }

  async remove(disId: string):
    Promise<IDistribuidores> {
    const dis = await this.distribuidoresModel.findByIdAndRemove(disId);
    if (!dis) {
      throw new NotFoundException(ValidationMessages.DISTRIBUIDOR_NO_REGISTRADO);
    }
    return dis;
  }
}
