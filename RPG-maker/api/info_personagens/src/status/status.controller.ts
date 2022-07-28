import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @Get()
  findAll() {
    return this.statusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.statusService.findOne(id);
  }

  @Get('personagem/:id_personagem')
  findPersonagemStatus(@Param('id_personagem') id_personagem: number) {
    return this.statusService.findPersonagemStatus(id_personagem);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(id, updateStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.statusService.remove(id);
  }
}
