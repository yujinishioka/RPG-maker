import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDano } from './entities/tipo-dano.entity';
import { TipoDanoService } from './tipo-dano.service';
import { TipoDanoController } from './tipo-dano.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoDano])],
  controllers: [TipoDanoController],
  providers: [TipoDanoService],
})
export class TipoDanoModule {}
