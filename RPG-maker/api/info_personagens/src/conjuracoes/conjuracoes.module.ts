import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Conjuracao } from './entities/conjuracao.entity';
import { ConjuracoesService } from './conjuracoes.service';
import { ConjuracoesController } from './conjuracoes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Conjuracao])],
  controllers: [ConjuracoesController],
  providers: [ConjuracoesService],
})
export class ConjuracoesModule {}
