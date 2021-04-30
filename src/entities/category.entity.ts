import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  name: string;

  @ManyToMany(() => Product, category => category.categories)
  products: Product[];
}