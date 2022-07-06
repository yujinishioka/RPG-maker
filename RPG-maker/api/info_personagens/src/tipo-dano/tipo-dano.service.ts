import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTipoDanoDto } from './dto/create-tipo-dano.dto';
import { UpdateTipoDanoDto } from './dto/update-tipo-dano.dto';
import { TipoDano } from './entities/tipo-dano.entity';

@Injectable()
export class TipoDanoService {
  constructor(
    @InjectRepository(TipoDano)
    private tipoDanoRepository: Repository<TipoDano>,
  ) {}

  create(createTipoDanoDto: CreateTipoDanoDto) {
    return 'This action adds a new tipoDano';
  }

  findAll(): Promise<TipoDano[]> {
    return this.tipoDanoRepository.find();
  }

  findOne(id: number) {
    return this.tipoDanoRepository.findOne({ where: { id_tipo_dano: id } });
  }

  update(id: number, updateTipoDanoDto: UpdateTipoDanoDto) {
    return `This action updates a #${id} tipoDano`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoDano`;
  }
}
