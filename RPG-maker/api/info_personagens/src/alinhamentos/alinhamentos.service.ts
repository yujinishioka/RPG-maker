import { Alinhamento } from './entities/alinhamento.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAlinhamentoDto } from './dto/create-alinhamento.dto';
import { UpdateAlinhamentoDto } from './dto/update-alinhamento.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AlinhamentosService {
  constructor(
    @InjectRepository(Alinhamento)
    private alinhamentoRepository: Repository<Alinhamento>,
  ) {}

  create(createAlinhamentoDto: CreateAlinhamentoDto) {
    return 'This action adds a new alinhamento';
  }

  findAll() {
    return this.alinhamentoRepository.find();
  }

  findOne(id: number) {
    return this.alinhamentoRepository.findOne({
      where: { id_alinhamento: id },
    });
  }

  update(id: number, updateAlinhamentoDto: UpdateAlinhamentoDto) {
    return `This action updates a #${id} alinhamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} alinhamento`;
  }
}
