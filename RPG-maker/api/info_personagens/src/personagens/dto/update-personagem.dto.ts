import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonagemDto } from './create-personagem.dto';

export class UpdatePersonagemDto extends PartialType(CreatePersonagemDto) {
  id: number;
  nome_personagem: string;
  titulo: string;
  id_alinhamento: number;
}
