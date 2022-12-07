import { Module } from '@nestjs/common';
import { RegistroAlquilerService } from './registro_alquiler.service';
import { RegistroAlquilerController } from './registro_alquiler.controller';
import { ClientesModule } from 'src/clientes/clientes.module';
import { CarrosModule } from 'src/carros/carros.module';

@Module({
  controllers: [RegistroAlquilerController],
  providers: [RegistroAlquilerService],
  imports: [ClientesModule, CarrosModule]
})
export class RegistroAlquilerModule {}
