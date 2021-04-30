import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { Tag } from "src/entities/tag.entity";
import { TagsService } from "./tags.service";
import { ApiTags } from '@nestjs/swagger';
import { Tagdto } from "./tag.dto";

@Crud({
   model: {
      type: Tag,
   },
   dto: {
      create: Tagdto,
      update: Tagdto,
   },
   query: {
      join: {
         products: {
            eager: false,
         },
      }
   }
})
@ApiTags('Tags')
@Controller("tags")
export class TagsController implements CrudController<Tag> {
   constructor(public service: TagsService) { }
}