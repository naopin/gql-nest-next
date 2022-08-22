import { PrismaService } from '../prisma/prisma.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { TodoModel } from './interfaces/todo.model';
import { GetTodosArgs } from './interfaces/get-todos-connection.args';

@Resolver((of) => TodoModel)
export class PostsResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [TodoModel], { name: 'fixedTodo', nullable: true })
  async getPostsByFixedData() {
    return [
      {
        id: '1',
        name: 'NestJS is so bad.',
      },
      {
        id: '2',
        name: 'GraphQL is so bad.',
      },
    ];
  }

  @Query(() => [TodoModel], { name: 'prismaTodos', nullable: true })
  async getPostsByPrisma() {
    return this.prisma.todo.findMany();
  }

  @Query(() => [TodoModel], { name: 'todos', nullable: true })
  async getTodos(@Args() args: GetTodosArgs) {
    return this.prisma.todo.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }
}
