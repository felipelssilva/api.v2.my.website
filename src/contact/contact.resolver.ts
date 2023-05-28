/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Context } from '@nestjs/graphql';
import { Contact } from './entities/contact.entity';
import { PrismaService } from 'src/prisma.service';
import { Inject } from '@nestjs/common';

@Resolver(Contact)
export class ContactResolver {
  // constructor(private readonly contactService: ContactService) {}
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [Contact])
  async projects(@Context() ctx) {
    return this.prismaService.contact.findMany();
  }
  // @Query(() => [Contact])
  // async contacts() {
  //   return await this.contactService.findAll();
  // }

  // @Query(() => Contact)
  // async contact(@Args('_id') _id: string) {
  //   return await this.contactService.findById(_id);
  // }

  // @Mutation(() => Contact)
  // async createContact(@Args('input') input: CreateContactInput) {
  //   return await this.contactService.create(input);
  // }

  // @Mutation(() => Contact)
  // async updateContact(
  //   @Args('_id') _id: string,
  //   @Args('input') input: UpdateContactInput,
  // ) {
  //   return await this.contactService.update(_id, input);
  // }

  // @Mutation(() => Boolean)
  // async deleteContact(@Args('_id') _id: string) {
  //   return await this.contactService.delete(_id);
  // }
}
