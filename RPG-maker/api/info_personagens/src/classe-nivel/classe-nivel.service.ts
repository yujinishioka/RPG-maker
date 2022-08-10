import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClasseNivelDto } from './dto/create-classe-nivel.dto';
import { UpdateClasseNivelDto } from './dto/update-classe-nivel.dto';
import { ClasseNivel } from './entities/classe-nivel.entity';

@Injectable()
export class ClasseNivelService {
  constructor(
    @InjectRepository(ClasseNivel)
    private classeNivelRepository: Repository<ClasseNivel>,
  ) {}

  create(createClasseNivelDto: CreateClasseNivelDto) {
    return 'This action adds a new classeNivel';
  }

  findAll() {
    return this.classeNivelRepository.find();
  }

  findOne(id: number) {
    return this.classeNivelRepository.findOne({
      where: { id_classe_nivel: id },
    });
  }

  update(id: number, updateClasseNivelDto: UpdateClasseNivelDto) {
    return `This action updates a #${id} classeNivel`;
  }

  remove(id: number) {
    return `This action removes a #${id} classeNivel`;
  }
}
