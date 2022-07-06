import { DataSource } from 'typeorm';
import { TipoDano } from './entities/tipo-dano.entity';

export const TipoDanoProviders = [
  {
    provide: 'TIPO_DANO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TipoDano),
    inject: ['DATA_SOURCE'],
  },
];
