import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoDanoService } from './tipo-dano.service';
import { CreateTipoDanoDto } from './dto/create-tipo-dano.dto';
import { UpdateTipoDanoDto } from './dto/update-tipo-dano.dto';

@Controller('tipo-dano')
export class TipoDanoController {
  constructor(private readonly tipoDanoService: TipoDanoService) {}

  @Post()
  create(@Body() createTipoDanoDto: CreateTipoDanoDto) {
    return this.tipoDanoService.create(createTipoDanoDto);
  }

  @Get()
  findAll() {
    return this.tipoDanoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoDanoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTipoDanoDto: UpdateTipoDanoDto,
  ) {
    return this.tipoDanoService.update(id, updateTipoDanoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoDanoService.remove(id);
  }
}
