// import { Controller } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { CertificateService } from './certificate.service';
import { Certificate } from './entities/certificate.entity';
import { CreateCertificateInput, UpdateCertificateInput } from '../graphql';

@Resolver('certificate')
export class CertificateResolver {
  constructor(private readonly certificateService: CertificateService) {}

  @Query(() => [Certificate])
  async certificate() {
    return await this.certificateService.findAll();
  }

  @Query(() => Certificate)
  async project(@Args('_id') _id: string) {
    return await this.certificateService.findById(_id);
  }

  @Mutation(() => Certificate)
  async createCertificate(@Args('input') input: CreateCertificateInput) {
    return await this.certificateService.create(input);
  }

  @Mutation(() => Certificate)
  async updateCertificate(
    @Args('_id') _id: string,
    @Args('input') input: UpdateCertificateInput,
  ) {
    return await this.certificateService.update(_id, input);
  }

  @Mutation(() => Boolean)
  async deleteCertificate(@Args('_id') _id: string) {
    return await this.certificateService.delete(_id);
  }
}
