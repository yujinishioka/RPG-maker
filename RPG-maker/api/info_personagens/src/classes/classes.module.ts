import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Classe } from './entities/classe.entity';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Classe])],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
