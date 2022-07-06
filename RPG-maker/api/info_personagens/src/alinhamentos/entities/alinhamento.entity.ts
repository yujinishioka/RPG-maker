import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alinhamento {
  @PrimaryGeneratedColumn()
  id_alinhamento: number;

  @Column({ length: 50 })
  tipo: string;

  @Column({ length: 5000 })
  explicacao: string;
}
