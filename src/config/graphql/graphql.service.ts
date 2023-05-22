/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
// import { PubSub } from 'graphql-subscriptions'
// import { GraphQLError } from 'graphql'
import { join } from 'path';
import { UserService } from 'src/user/user.service';

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
  constructor(private readonly userService: UserService) {}

  async createGqlOptions(): Promise<GqlModuleOptions> {
    return {
      typePaths: ['./**/*.graphql'],
      autoSchemaFile: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    };
  }
}
