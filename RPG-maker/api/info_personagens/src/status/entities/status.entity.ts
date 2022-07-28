import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Status {
  @PrimaryGeneratedColumn()
  id_status: number;

  @Column({ length: 50 })
  ability: string;

  @Column()
  valor: number;

  @Column()
  id_personagem: number;
}
