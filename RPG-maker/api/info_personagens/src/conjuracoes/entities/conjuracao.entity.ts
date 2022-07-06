import { Dano } from '../../dano/entities/dano.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TipoDano } from 'src/tipo-dano/entities/tipo-dano.entity';

@Entity()
export class Conjuracao {
  @PrimaryGeneratedColumn()
  id_conjuracao: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 50 })
  nivel: string;

  @Column({ length: 50 })
  escola: string;

  @Column({ length: 50 })
  casting: string;

  @Column({ length: 50 })
  range: string;

  @Column({ length: 50 })
  ade: string;

  @Column({ length: 10 })
  componente: string;

  @Column({ length: 10000 })
  descricao: string;

  @ManyToOne(() => Dano, (dano) => dano.conjuracoes)
  @JoinColumn({ name: 'id_dano' })
  dano: Dano;

  @ManyToMany(() => TipoDano)
  @JoinTable({
    name: 'conjuracao_tipo_dano',
    joinColumn: {
      name: 'id_conjuracao',
    },
    inverseJoinColumn: {
      name: 'id_tipo_dano',
    },
  })
  tiposDano: TipoDano[];
}
