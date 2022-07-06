import { Alinhamento } from './entities/alinhamento.entity';
import { DataSource } from 'typeorm';

export const AlinhamentosProviders = [
  {
    provide: 'ALINHAMENTOS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Alinhamento),
    inject: ['DATA_SOURCE'],
  },
];
