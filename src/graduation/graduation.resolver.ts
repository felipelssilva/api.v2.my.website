/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Controller } from '@nestjs/common';
import { Resolver, Query, Context } from '@nestjs/graphql';

import { Graduation } from './entities/graduation.entity';
import { PrismaService } from 'src/prisma.service';
import { Inject } from '@nestjs/common';

@Resolver(Graduation)
export class GraduationResolver {
  // constructor(private readonly graduationService: GraduationService) {}
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [Graduation], { nullable: true })
  async graduations(@Context() ctx) {
    return this.prismaService.graduation.findMany();
  }
  // @Query(() => [Graduation])
  // async graduations() {
  //   return await this.graduationService.findAll();
  // }

  // @Query(() => Graduation)
  // async graduation(@Args('_id') _id: string) {
  //   return await this.graduationService.findById(_id);
  // }

  // @Mutation(() => Graduation)
  // async createGraduation(@Args('input') input: CreateGraduationInput) {
  //   return await this.graduationService.create(input);
  // }

  // @Mutation(() => Graduation)
  // async updateGraduation(
  //   @Args('_id') _id: string,
  //   @Args('input') input: UpdateGraduationInput,
  // ) {
  //   return await this.graduationService.update(_id, input);
  // }

  // @Mutation(() => Boolean)
  // async deleteGraduation(@Args('_id') _id: string) {
  //   return await this.graduationService.delete(_id);
  // }
}
