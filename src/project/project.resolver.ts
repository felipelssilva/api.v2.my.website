// import { Controller } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput, UpdateProjectInput } from 'src/graphql';

@Resolver('projects')
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(() => [Project])
  async projects() {
    return await this.projectService.findAll();
  }

  @Query(() => Project)
  async project(@Args('_id') _id: string) {
    return await this.projectService.findById(_id);
  }

  @Mutation(() => Project)
  async createProject(@Args('input') input: CreateProjectInput) {
    return await this.projectService.create(input);
  }

  @Mutation(() => Project)
  async updateProject(
    @Args('_id') _id: string,
    @Args('input') input: UpdateProjectInput,
  ) {
    return await this.projectService.update(_id, input);
  }

  @Mutation(() => Boolean)
  async deleteProject(@Args('_id') _id: string) {
    return await this.projectService.delete(_id);
  }
}
