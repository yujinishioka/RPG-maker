import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClasseDto } from './dto/create-classe.dto';
import { UpdateClasseDto } from './dto/update-classe.dto';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  create(@Body() createClasseDto: CreateClasseDto) {
    return this.classesService.create(createClasseDto);
  }

  @Get()
  findAll() {
    return this.classesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.classesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateClasseDto: UpdateClasseDto) {
    return this.classesService.update(id, updateClasseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.classesService.remove(id);
  }
}
