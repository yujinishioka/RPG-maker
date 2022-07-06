import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoDano {
  @PrimaryGeneratedColumn()
  id_tipo_dano: number;

  @Column({ length: 50 })
  tipo: string;
}
