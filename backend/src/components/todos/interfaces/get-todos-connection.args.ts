import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetTodosArgs {
  @Field((type) => [String], { nullable: true })
  type?: string[];
}