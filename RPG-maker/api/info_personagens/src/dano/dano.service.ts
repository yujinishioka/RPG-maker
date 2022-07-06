import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDanoDto } from './dto/create-dano.dto';
import { UpdateDanoDto } from './dto/update-dano.dto';
import { Dano } from './entities/dano.entity';

@Injectable()
export class DanoService {
  constructor(
    @InjectRepository(Dano)
    private danoRepository: Repository<Dano>,
  ) {}

  create(createDanoDto: CreateDanoDto) {
    return 'This action adds a new dano';
  }

  findAll(): Promise<Dano[]> {
    return this.danoRepository.find();
  }

  findOne(id: number) {
    return this.danoRepository.findOne({ where: { id_dano: id } });
  }

  update(id: number, updateDanoDto: UpdateDanoDto) {
    return `This action updates a #${id} dano`;
  }

  remove(id: number) {
    return `This action removes a #${id} dano`;
  }
}
