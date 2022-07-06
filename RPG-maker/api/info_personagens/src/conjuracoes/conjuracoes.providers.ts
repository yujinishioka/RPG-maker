import { DataSource } from 'typeorm';
import { Conjuracao } from './entities/conjuracao.entity';
export const ConjuracoesProviders = [
  {
    provide: 'CONJURACOES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Conjuracao),
    inject: ['DATA_SOURCE'],
  },
];
