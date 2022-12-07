import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteSchema } from './clientes/schema/clientes.schema';
import { ClientesController } from './clientes/clientes.controller';
import { ClientesService } from './clientes/clientes.service';
import { DistribuidoresSchema } from './distribuidores/schema/distribuidores.schema';
import { DistribuidoresController } from './distribuidores/distribuidores.controller';
import { DistribuidoresService } from './distribuidores/distribuidores.service';
import { CarroSchema } from './carros/schema/carro.schema';
import { CarrosController } from './carros/carros.controller';
import { CarrosService } from './carros/carros.service';
import { RegistroSchema } from './registro_alquiler/schema/alquiler.schema';
import { RegistroAlquilerController } from './registro_alquiler/registro_alquiler.controller';
import { RegistroAlquilerService } from './registro_alquiler/registro_alquiler.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/RentaCarros'),
    MongooseModule.forFeature([{ name: 'Cliente', schema: ClienteSchema}]),
    MongooseModule.forFeature([{ name: 'Distribuidores', schema: DistribuidoresSchema}]),
    MongooseModule.forFeature([{name : 'Carros', schema: CarroSchema}]),
    MongooseModule.forFeature([{name : 'Registros', schema: RegistroSchema}])
  ],
  controllers: [AppController, ClientesController, DistribuidoresController, CarrosController, RegistroAlquilerController],
  providers: [AppService, ClientesService, DistribuidoresService, CarrosService, RegistroAlquilerService],
})
export class AppModule {}
