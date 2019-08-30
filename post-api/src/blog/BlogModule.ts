import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './services/PostServices';
import { PostController } from './PostController';
import { PostEntity } from './entities/PostEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
  ],
  controllers: [
      PostController
  ],
  providers: [
      PostService
  ],
})
export class BlogModule {}
