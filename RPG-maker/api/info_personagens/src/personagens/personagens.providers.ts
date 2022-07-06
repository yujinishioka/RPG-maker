import { DataSource } from 'typeorm';
import { Personagem } from './entities/personagem.entity';

export const PersonagensProviders = [
  {
    provide: 'DANO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Personagem),
    inject: ['DATA_SOURCE'],
  },
];
