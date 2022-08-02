import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Classe {
  @PrimaryGeneratedColumn()
  id_classe: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 50 })
  hit_die: string;

  @Column()
  proficiencias: string;

  @Column()
  descricao: string;
}
