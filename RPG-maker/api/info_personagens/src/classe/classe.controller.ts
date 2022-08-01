import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClasseService } from './classe.service';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClasseDto } from './dto/update-classe.dto';

@Controller('classe')
export class ClasseController {
  constructor(private readonly classeService: ClasseService) {}

  @Post()
  create(@Body() createClasseDto: CreateClasseDto) {
    return this.classeService.create(createClasseDto);
  }

  @Get()
  findAll() {
    return this.classeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClasseDto: UpdateClasseDto) {
    return this.classeService.update(+id, updateClasseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classeService.remove(+id);
  }
}
