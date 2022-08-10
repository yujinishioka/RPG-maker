import { PartialType } from '@nestjs/mapped-types';
import { CreateClasseNivelDto } from './create-classe-nivel.dto';

export class UpdateClasseNivelDto extends PartialType(CreateClasseNivelDto) {}
