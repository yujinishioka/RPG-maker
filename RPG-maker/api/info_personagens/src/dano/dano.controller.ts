import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DanoService } from './dano.service';
import { CreateDanoDto } from './dto/create-dano.dto';
import { UpdateDanoDto } from './dto/update-dano.dto';

@Controller('dano')
export class DanoController {
  constructor(private readonly danoService: DanoService) {}

  @Post()
  create(@Body() createDanoDto: CreateDanoDto) {
    return this.danoService.create(createDanoDto);
  }

  @Get()
  findAll() {
    return this.danoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.danoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDanoDto: UpdateDanoDto) {
    return this.danoService.update(id, updateDanoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.danoService.remove(id);
  }
}
