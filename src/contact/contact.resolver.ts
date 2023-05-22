import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ContactService } from './contact.service';
import { Contact } from './entities/contact.entity';
import { CreateContactInput, UpdateContactInput } from 'src/graphql';

@Resolver('contact')
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Query(() => [Contact])
  async contacts() {
    return await this.contactService.findAll();
  }

  @Query(() => Contact)
  async contact(@Args('_id') _id: string) {
    return await this.contactService.findById(_id);
  }

  @Mutation(() => Contact)
  async createContact(@Args('input') input: CreateContactInput) {
    return await this.contactService.create(input);
  }

  @Mutation(() => Contact)
  async updateContact(
    @Args('_id') _id: string,
    @Args('input') input: UpdateContactInput,
  ) {
    return await this.contactService.update(_id, input);
  }

  @Mutation(() => Boolean)
  async deleteContact(@Args('_id') _id: string) {
    return await this.contactService.delete(_id);
  }
}
