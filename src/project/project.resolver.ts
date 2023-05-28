/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Context } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

import { Project } from './entities/project.entity';
import { PrismaService } from 'src/prisma.service';

@Resolver(Project)
export class ProjectResolver {
  // constructor(private readonly projectService: ProjectService) {}
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [Project])
  async projects(@Context() ctx) {
    return this.prismaService.project.findMany();
  }

  // @Query(() => [Project])
  // async projects() {
  //   return await this.projectService.findAll();
  // }

  // @Query(() => Project)
  // async project(@Args('_id') _id: string) {
  //   return await this.projectService.findById(_id);
  // }

  // @Mutation(() => Project)
  // async createProject(@Args('input') input: CreateProjectInput) {
  //   return await this.projectService.create(input);
  // }

  // @Mutation(() => Project)
  // async updateProject(
  //   @Args('_id') _id: string,
  //   @Args('input') input: UpdateProjectInput,
  // ) {
  //   return await this.projectService.update(_id, input);
  // }

  // @Mutation(() => Boolean)
  // async deleteProject(@Args('_id') _id: string) {
  //   return await this.projectService.delete(_id);
  // }
}
