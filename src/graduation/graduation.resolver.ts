// import { Controller } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { GraduationService } from './graduation.service';
import { Graduation } from './entities/graduation.entity';
import { CreateGraduationInput, UpdateGraduationInput } from '../graphql';

@Resolver('graduation')
export class GraduationResolver {
  constructor(private readonly graduationService: GraduationService) {}

  @Query(() => [Graduation])
  async graduations() {
    return await this.graduationService.findAll();
  }

  @Query(() => Graduation)
  async graduation(@Args('_id') _id: string) {
    return await this.graduationService.findById(_id);
  }

  @Mutation(() => Graduation)
  async createGraduation(@Args('input') input: CreateGraduationInput) {
    return await this.graduationService.create(input);
  }

  @Mutation(() => Graduation)
  async updateGraduation(
    @Args('_id') _id: string,
    @Args('input') input: UpdateGraduationInput,
  ) {
    return await this.graduationService.update(_id, input);
  }

  @Mutation(() => Boolean)
  async deleteGraduation(@Args('_id') _id: string) {
    return await this.graduationService.delete(_id);
  }
}
