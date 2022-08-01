import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Classe {
  @PrimaryGeneratedColumn()
  id_classe: number;

  @Column({ length: 100 })
  nome: string;

  @Column()
  descricao: string;
}
