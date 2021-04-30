import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  name: string;

  @ManyToMany(() => Product, product => product.tags)
  products: Product[];
}