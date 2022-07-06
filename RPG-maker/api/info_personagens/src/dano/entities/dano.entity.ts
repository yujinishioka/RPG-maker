import { Conjuracao } from '../../conjuracoes/entities/conjuracao.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dano {
  @PrimaryGeneratedColumn()
  id_dano: number;

  @Column('int')
  total: number;

  @Column({ length: 4 })
  dado: string;

  @Column('int')
  bonus: number;

  @OneToMany(() => Conjuracao, (conjuracao) => conjuracao.dano, {
    cascade: true,
  })
  conjuracoes: Conjuracao[];
}
