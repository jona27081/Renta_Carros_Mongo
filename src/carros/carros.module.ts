import { Module } from '@nestjs/common';
import { CarrosService } from './carros.service';
import { CarrosController } from './carros.controller';
import { DistribuidoresModule } from 'src/distribuidores/distribuidores.module';

@Module({
  controllers: [CarrosController],
  providers: [CarrosService],
  exports: [CarrosService],
  imports: [DistribuidoresModule]
})
export class CarrosModule {}
