import { PartialType } from '@nestjs/mapped-types';
import { CreateDanoDto } from './create-dano.dto';

export class UpdateDanoDto extends PartialType(CreateDanoDto) {}
