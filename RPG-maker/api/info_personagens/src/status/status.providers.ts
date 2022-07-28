import { DataSource } from 'typeorm';
import { Status } from './entities/status.entity';
export const StatusProviders = [
  {
    provide: 'STATUS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Status),
    inject: ['DATA_SOURCE'],
  },
];
