import { Injectable } from '@nestjs/common';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClasseDto } from './dto/update-classe.dto';

@Injectable()
export class ClasseService {
  create(createClasseDto: CreateClasseDto) {
    return 'This action adds a new classe';
  }

  findAll() {
    return `This action returns all classe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classe`;
  }

  update(id: number, updateClasseDto: UpdateClasseDto) {
    return `This action updates a #${id} classe`;
  }

  remove(id: number) {
    return `This action removes a #${id} classe`;
  }
}
