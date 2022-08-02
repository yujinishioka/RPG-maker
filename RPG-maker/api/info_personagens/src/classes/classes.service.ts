import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClasseDto } from './dto/update-classe.dto';
import { Classe } from './entities/classe.entity';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Classe)
    private classeRepository: Repository<Classe>,
  ) {}

  create(createClasseDto: CreateClasseDto) {
    return 'This action adds a new class';
  }

  findAll() {
    return this.classeRepository.find();
  }

  findOne(id: number) {
    return this.classeRepository.findOne({ where: { id_classe: id } });
  }

  update(id: number, updateClassDto: UpdateClasseDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
