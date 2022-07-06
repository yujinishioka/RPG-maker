import { Alinhamento } from './entities/alinhamento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AlinhamentosService } from './alinhamentos.service';
import { AlinhamentosController } from './alinhamentos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Alinhamento])],
  controllers: [AlinhamentosController],
  providers: [AlinhamentosService],
})
export class AlinhamentosModule {}
