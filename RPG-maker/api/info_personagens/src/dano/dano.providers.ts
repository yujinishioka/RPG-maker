import { Dano } from './entities/dano.entity';
import { DataSource } from 'typeorm';

export const DanoProviders = [
  {
    provide: 'DANO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Dano),
    inject: ['DATA_SOURCE'],
  },
];
