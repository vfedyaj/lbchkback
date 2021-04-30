import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { TagsModule } from './tags/tags.module';
import { CategoriesModule } from './categories/categories.module';
import * as path from 'path'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'vladfedyay',
      password: 'pass',
      database: 'mydb',
      entities: [
        path.join(__dirname, '/**/*.entity{.ts,.js}')
      ],
      synchronize: false,
      logging: true,
    }),
    ProductsModule,
    TagsModule,
    CategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
