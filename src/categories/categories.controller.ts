import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { Category } from "../entities/category.entity";
import { CategoriesService } from "./categories.service";
import { ApiTags } from '@nestjs/swagger';
import { Categorydto } from "./category.dto";

@Crud({
   model: {
      type: Category,
   },
   dto: {
      create: Categorydto,
      update: Categorydto,
   },
   query: {
      join: {
         products: {
            eager: false,
         },
      }
   }
})
@ApiTags('Categories')
@Controller("categories")
export class CategoriesController implements CrudController<Category> {
   constructor(public service: CategoriesService) { }
}