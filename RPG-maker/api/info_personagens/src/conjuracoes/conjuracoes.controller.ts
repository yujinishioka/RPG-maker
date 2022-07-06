import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConjuracoesService } from './conjuracoes.service';
import { CreateConjuracaoDto } from './dto/create-conjuracao.dto';
import { UpdateConjuracaoDto } from './dto/update-conjuracao.dto';

@Controller('conjuracoes')
export class ConjuracoesController {
  constructor(private readonly conjuracoesService: ConjuracoesService) {}

  @Post()
  create(@Body() createconjuracaoDto: CreateConjuracaoDto) {
    return this.conjuracoesService.create(createconjuracaoDto);
  }

  @Get()
  findAll() {
    return this.conjuracoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.conjuracoesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateConjuracaoDto: UpdateConjuracaoDto,
  ) {
    return this.conjuracoesService.update(id, updateConjuracaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.conjuracoesService.remove(id);
  }
}
