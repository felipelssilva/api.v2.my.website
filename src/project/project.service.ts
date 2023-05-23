import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectInput, UpdateProjectInput } from '../graphql';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: MongoRepository<Project>,
  ) {}

  async findAll() {
    return await this.projectRepository.find({
      cache: true,
    });
  }

  async findById(_id: string): Promise<Project> {
    return await this.projectRepository.findOne({
      where: {
        _id: _id,
      },
    });
  }

  async create(input: CreateProjectInput): Promise<Project> {
    const { name, description, url } = input;

    const project = new Project();
    project.name = name;
    project.description = description;
    project.url = url;
    project.createdAt = new Date().toISOString();

    return await this.projectRepository.save(project);
  }

  async update(_id: string, input: UpdateProjectInput): Promise<boolean> {
    const { name, description, url } = input;

    const project = await this.projectRepository.findOne({
      where: {
        _id: _id,
      },
    });
    project.name = name;
    project.description = description;
    project.url = url;
    project.updatedAt = new Date().toISOString();

    return (await this.projectRepository.save(project)) ? true : false;
  }

  async delete(_id: string): Promise<boolean> {
    const site = await this.projectRepository.findOne({
      where: {
        _id: _id,
      },
    });
    return (await this.projectRepository.remove(site)) ? true : false;
  }
}
