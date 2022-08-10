import { ClasseNivel } from './entities/classe-nivel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClasseNivelService } from './classe-nivel.service';
import { ClasseNivelController } from './classe-nivel.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClasseNivel])],
  controllers: [ClasseNivelController],
  providers: [ClasseNivelService],
})
export class ClasseNivelModule {}
