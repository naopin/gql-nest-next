import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TodoModel {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  dueDate: string;

  @Field((type) => String)
  status: string;

  @Field((type) => String)
  memo: string;
}