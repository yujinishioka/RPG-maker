import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Personagem {
  @PrimaryGeneratedColumn()
  id_personagem: number;

  @Column({ length: 100 })
  nome_jogador: string;

  @Column({ length: 100 })
  nome_personagem: string;

  @Column({ length: 200 })
  titulo: string;

  @Column('int')
  nivel: number;

  @Column()
  experiencia: number;

  @Column('int')
  iniciativa: number;

  @Column('int')
  deslocamento: number;

  @Column('int')
  armadura: number;

  @Column('int')
  vida: number;

  @Column('int')
  proficiencia: number;

  @Column()
  inspiracao: boolean;

  @Column({ length: 50 })
  idade: string;

  @Column({ length: 50 })
  altura: string;

  @Column({ length: 50 })
  peso: string;

  @Column({ length: 50 })
  cor_olhos: string;

  @Column({ length: 50 })
  cor_pele: string;

  @Column({ length: 50 })
  cor_cabelo: string;

  @Column({ length: 2000 })
  personalidade: string;

  @Column({ length: 2000 })
  ideais: string;

  @Column({ length: 2000 })
  vinculos: string;

  @Column({ length: 2000 })
  fraquezas: string;

  @Column({ length: 2000 })
  caracteristicas: string;

  @Column({ length: 2000 })
  outras_proficiencias: string;

  @Column({ length: 2000 })
  aliados: string;

  @Column({ length: 2000 })
  historia_personagem: string;

  @Column()
  id_alinhamento: number;
}
