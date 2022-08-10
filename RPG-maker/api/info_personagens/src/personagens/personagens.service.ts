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
  create(createPersonagemDto: CreatePersonagemDto) {
    return 'This action adds a new personagem';
  }

  findAll() {
    return this.personagensRepository.find({
      order: { id_personagem: 'ASC' },
      relations: ['classeNivel'],
    });
  }

  findOne(id: number) {
    return this.personagensRepository.findOne({ where: { id_personagem: id } });
  }

  update(id: number, updatePersonagemDto: UpdatePersonagemDto) {
    const personagem = new Personagem();
    personagem.nome_personagem = updatePersonagemDto.nome_personagem;
    personagem.titulo = updatePersonagemDto.titulo;
    personagem.id_alinhamento = updatePersonagemDto.id_alinhamento;
    const aux = this.personagensRepository.update(id, personagem);
    return aux;
  }

  remove(id: number) {
    return `This action removes a #${id} personagem`;
  }
}
