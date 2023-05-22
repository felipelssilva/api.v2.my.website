import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { CreateContactInput, UpdateContactInput } from 'src/graphql';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: MongoRepository<Contact>,
  ) {}

  async findAll() {
    return await this.contactRepository.find({
      cache: true,
    });
  }

  async findById(_id: string): Promise<Contact> {
    return await this.contactRepository.findOne({
      where: {
        _id: _id,
      },
    });
  }

  async create(input: CreateContactInput): Promise<Contact> {
    const { name, email, message, subject } = input;

    const contact = new Contact();
    contact.name = name;
    contact.email = email;
    contact.message = message;
    contact.subject = subject;

    return await this.contactRepository.save(contact);
  }

  async update(_id: string, input: UpdateContactInput): Promise<boolean> {
    const { name, email, message, subject } = input;

    const contact = await this.contactRepository.findOne({
      where: {
        _id: _id,
      },
    });
    contact.name = name;
    contact.email = email;
    contact.message = message;
    contact.subject = subject;

    return (await this.contactRepository.save(contact)) ? true : false;
  }

  async delete(_id: string): Promise<boolean> {
    const site = await this.contactRepository.findOne({
      where: {
        _id: _id,
      },
    });
    return (await this.contactRepository.remove(site)) ? true : false;
  }
}
