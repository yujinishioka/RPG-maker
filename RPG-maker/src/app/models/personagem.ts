import { Ataque } from './ataque';
import { Conjuracao } from './conjuracao';
import { Equipamento } from './equipamento';
import { Pericia, PericiaProficiencia } from './pericia';
import { SalvaGuarda, SalvaGuardaProficiencia } from './salvaGuarda';
import { Status } from './status';

export class Personagem {

  id_personagem!: number;
  nome_jogador!: string;
  nome_personagem!: string;
  titulo?: string;
  nivel!: number;
  experiencia!: number;
  id_alinhamento!: number;
  iniciativa!: number;
  deslocamento!: number;
  armadura!: number;
  vida!: number;

  status!: Status[];
  proficiencia!: number;
  salvaGuardaProficiencia!: SalvaGuardaProficiencia;
  salvaGuarda!: SalvaGuarda;
  periciaProficiencia!: PericiaProficiencia;
  pericia!: Pericia;

  inspiracao?: boolean;
  debuff?: string;

  conjuracao?: Array<Conjuracao>;
  ataque?: Array<Ataque>;
  equipamento?: Array<Equipamento>;

  idade?: number;
  altura?: number;
  peso?: number;
  corDosOlhos?: string;
  corDaPele?: string;
  corDoCabelo?: string;

  idiomas?: string;
  personalidade?: string;
  ideais?: string;
  vinculos?: string;
  fraquezas?: string;
  caracteristicas?: string;
  outrasProficiencias?: string;
  aliados?: string;
  historiaDoPersonagem?: string;

  constructor() {}
}
