/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Controller } from '@nestjs/common';
import { Resolver, Query, Context } from '@nestjs/graphql';

import { Certificate } from './entities/certificate.entity';
import { Inject } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Resolver(Certificate)
export class CertificateResolver {
  // constructor(private readonly certificateService: CertificateService) {}
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [Certificate])
  async projects(@Context() ctx) {
    return this.prismaService.certificate.findMany();
  }
  // @Query(() => [Certificate])
  // async certificate() {
  //   return await this.certificateService.findAll();
  // }

  // @Query(() => Certificate)
  // async project(@Args('_id') _id: string) {
  //   return await this.certificateService.findById(_id);
  // }

  // @Mutation(() => Certificate)
  // async createCertificate(@Args('input') input: CreateCertificateInput) {
  //   return await this.certificateService.create(input);
  // }

  // @Mutation(() => Certificate)
  // async updateCertificate(
  //   @Args('_id') _id: string,
  //   @Args('input') input: UpdateCertificateInput,
  // ) {
  //   return await this.certificateService.update(_id, input);
  // }

  // @Mutation(() => Boolean)
  // async deleteCertificate(@Args('_id') _id: string) {
  //   return await this.certificateService.delete(_id);
  // }
}
