import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClasseNivelService } from './classe-nivel.service';
import { CreateClasseNivelDto } from './dto/create-classe-nivel.dto';
import { UpdateClasseNivelDto } from './dto/update-classe-nivel.dto';

@Controller('classe-nivel')
export class ClasseNivelController {
  constructor(private readonly classeNivelService: ClasseNivelService) {}

  @Post()
  create(@Body() createClasseNivelDto: CreateClasseNivelDto) {
    return this.classeNivelService.create(createClasseNivelDto);
  }

  @Get()
  findAll() {
    return this.classeNivelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.classeNivelService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateClasseNivelDto: UpdateClasseNivelDto,
  ) {
    return this.classeNivelService.update(id, updateClasseNivelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.classeNivelService.remove(id);
  }
}
