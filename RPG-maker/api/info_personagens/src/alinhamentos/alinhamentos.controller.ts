import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlinhamentosService } from './alinhamentos.service';
import { CreateAlinhamentoDto } from './dto/create-alinhamento.dto';
import { UpdateAlinhamentoDto } from './dto/update-alinhamento.dto';

@Controller('alinhamentos')
export class AlinhamentosController {
  constructor(private readonly alinhamentosService: AlinhamentosService) {}

  @Post()
  create(@Body() createAlinhamentoDto: CreateAlinhamentoDto) {
    return this.alinhamentosService.create(createAlinhamentoDto);
  }

  @Get()
  findAll() {
    return this.alinhamentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.alinhamentosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateAlinhamentoDto: UpdateAlinhamentoDto,
  ) {
    return this.alinhamentosService.update(id, updateAlinhamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.alinhamentosService.remove(id);
  }
}
