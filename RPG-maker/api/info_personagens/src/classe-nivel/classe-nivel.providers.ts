import { ClasseNivel } from './entities/classe-nivel.entity';
import { DataSource } from 'typeorm';

export const ClasseNivelProviders = [
  {
    provide: 'CLASSE_NIVEL_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(ClasseNivel);
    },
    inject: 'DATA_SOURCE',
  },
];
