import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Conjuracao } from './entities/conjuracao.entity';
import { CreateConjuracaoDto } from './dto/create-conjuracao.dto';
import { UpdateConjuracaoDto } from './dto/update-conjuracao.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ConjuracoesService {
  constructor(
    @InjectRepository(Conjuracao)
    private conjuracoesRepository: Repository<Conjuracao>,
  ) {}

  create(createConjuracaoDto: CreateConjuracaoDto) {
    return 'This action adds a new conjuracoe';
  }

  findAll() {
    return this.conjuracoesRepository.find({
      relations: ['dano', 'tiposDano'],
    });
  }

  findOne(id: number) {
    return this.conjuracoesRepository.findOne({
      where: { id_conjuracao: id },
      relations: { dano: true },
    });
  }

  update(id: number, updateconjuracaoDto: UpdateConjuracaoDto) {
    return `This action updates a #${id} conjuracoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} conjuracoe`;
  }
}
