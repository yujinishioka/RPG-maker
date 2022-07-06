import { Personagem } from './entities/personagem.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PersonagensService {
  constructor(
    @InjectRepository(Personagem)
    private personagensRepository: Repository<Personagem>,
  ) {}
  create(createPersonagenDto: CreatePersonagemDto) {
    return 'This action adds a new personagem';
  }

  findAll() {
    return this.personagensRepository.find();
  }

  findOne(id: number) {
    return this.personagensRepository.findOne({ where: { id_personagem: id } });
  }

  update(id: number, updatePersonagenDto: UpdatePersonagemDto) {
    return `This action updates a #${id} personagem`;
  }

  remove(id: number) {
    return `This action removes a #${id} personagem`;
  }
}
