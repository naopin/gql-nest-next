import { Module } from '@nestjs/common';
import { PostsResolver } from './todo.resolvers';

@Module({
  providers: [PostsResolver],
})
export class TodosModule {}