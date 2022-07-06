import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDanoDto } from './create-tipo-dano.dto';

export class UpdateTipoDanoDto extends PartialType(CreateTipoDanoDto) {}
