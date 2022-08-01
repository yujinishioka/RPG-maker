import { PartialType } from '@nestjs/mapped-types';
import { CreateClasseDto } from './create-classe.dto';

export class UpdateClasseDto extends PartialType(CreateClasseDto) {}
