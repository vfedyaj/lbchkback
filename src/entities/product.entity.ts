import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Tag } from './tag.entity';
import { Category } from './category.entity'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15 })
  name: string;

  @Column({ type: "float" })
  price: number;

  @ManyToMany(() => Tag, tag => tag.products)
  @JoinTable()
  tags: Tag[];

  @ManyToMany(() => Category, category => category.products)
  @JoinTable()
  categories: Category[];
}