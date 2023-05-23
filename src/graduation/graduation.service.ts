import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Graduation } from './entities/graduation.entity';
import { CreateGraduationInput, UpdateGraduationInput } from '../graphql';

@Injectable()
export class GraduationService {
  constructor(
    @InjectRepository(Graduation)
    private readonly graduationRepository: MongoRepository<Graduation>,
  ) {}

  async findAll() {
    return await this.graduationRepository.find({
      cache: true,
    });
  }

  async findById(_id: string): Promise<Graduation> {
    return await this.graduationRepository.findOne({
      where: {
        _id: _id,
      },
    });
  }

  async create(input: CreateGraduationInput): Promise<Graduation> {
    const { name, description, img, title } = input;

    const graduation = new Graduation();
    graduation.name = name;
    graduation.description = description;
    graduation.img = img;
    graduation.title = title;
    graduation.createdAt = new Date().toISOString();

    return await this.graduationRepository.save(graduation);
  }

  async update(_id: string, input: UpdateGraduationInput): Promise<boolean> {
    const { name, description, img, title } = input;

    const graduation = await this.graduationRepository.findOne({
      where: {
        _id: _id,
      },
    });
    graduation.name = name;
    graduation.description = description;
    graduation.img = img;
    graduation.title = title;
    graduation.updatedAt = new Date().toISOString();

    return (await this.graduationRepository.save(graduation)) ? true : false;
  }

  async delete(_id: string): Promise<boolean> {
    const site = await this.graduationRepository.findOne({
      where: {
        _id: _id,
      },
    });
    return (await this.graduationRepository.remove(site)) ? true : false;
  }
}
