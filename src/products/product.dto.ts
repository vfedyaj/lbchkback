import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Tag } from '../entities/tag.entity';
import { Category } from '../entities/category.entity';

export class Productdto {
   @ApiPropertyOptional()
   id: number;

   @ApiProperty()
   name: string;

   @ApiProperty()
   price: number;

   @ApiProperty()
   tags: Tag[]

   @ApiProperty()
   categories: Category[]
}