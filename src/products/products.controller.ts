import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { Product } from "../entities/product.entity";
import { ProductsService } from "./products.service";
import { ApiTags } from '@nestjs/swagger';
import { Productdto } from "./product.dto";

@Crud({
   model: {
      type: Product,
   },
   dto: {
      create: Productdto,
      update: Productdto,
   },
   query: {
      join: {
         categories: {
            eager: false,
         },
         tags: {
            eager: false,
         }
      }
   }
})
@ApiTags('Products')
@Controller("products")
export class ProductsController implements CrudController<Product> {
   constructor(public service: ProductsService) { }
}