import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';

export class Categorydto {
   @ApiPropertyOptional()
   id: number;

   @ApiProperty()
   name: string;

   @ApiProperty()
   product: Product[]
}