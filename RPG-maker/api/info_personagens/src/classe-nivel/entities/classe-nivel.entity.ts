import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClasseNivel {
  @PrimaryGeneratedColumn()
  id_classe_nivel: number;

  @Column()
  nivel_classe: number;

  @Column()
  id_classe: number;
}
