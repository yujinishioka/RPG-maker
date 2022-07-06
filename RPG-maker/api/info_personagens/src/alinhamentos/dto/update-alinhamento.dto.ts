import { PartialType } from '@nestjs/mapped-types';
import { CreateAlinhamentoDto } from './create-alinhamento.dto';

export class UpdateAlinhamentoDto extends PartialType(CreateAlinhamentoDto) {}
