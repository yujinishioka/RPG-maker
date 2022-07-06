import { PartialType } from '@nestjs/mapped-types';
import { CreateConjuracaoDto } from './create-conjuracao.dto';

export class UpdateConjuracaoDto extends PartialType(CreateConjuracaoDto) {}
