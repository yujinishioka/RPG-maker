import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Personagem } from './entities/personagem.entity';
import { PersonagensService } from './personagens.service';
import { PersonagensController } from './personagens.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Personagem])],
  controllers: [PersonagensController],
  providers: [PersonagensService],
})
export class PersonagensModule {}
