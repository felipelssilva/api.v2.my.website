import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Certificate } from './entities/certificate.entity';
import { CreateCertificateInput, UpdateCertificateInput } from '../graphql';

@Injectable()
export class CertificateService {
  constructor(
    @InjectRepository(Certificate)
    private readonly certificateRepository: MongoRepository<Certificate>,
  ) {}

  async findAll() {
    return await this.certificateRepository.find({
      cache: true,
    });
  }

  async findById(_id: string): Promise<Certificate> {
    return await this.certificateRepository.findOne({
      where: {
        _id: _id,
      },
    });
  }

  async create(input: CreateCertificateInput): Promise<Certificate> {
    const { name, description, url, img, order } = input;

    const certificate = new Certificate();
    certificate.name = name;
    certificate.description = description;
    certificate.url = url;
    certificate.img = img;
    certificate.order = order;
    certificate.createdAt = new Date().toISOString();

    return await this.certificateRepository.save(certificate);
  }

  async update(_id: string, input: UpdateCertificateInput): Promise<boolean> {
    const { name, description, url, img, order } = input;

    const certificate = await this.certificateRepository.findOne({
      where: {
        _id: _id,
      },
    });
    certificate.name = name;
    certificate.description = description;
    certificate.url = url;
    certificate.img = img;
    certificate.order = order;
    certificate.updatedAt = new Date().toISOString();

    return (await this.certificateRepository.save(certificate)) ? true : false;
  }

  async delete(_id: string): Promise<boolean> {
    const site = await this.certificateRepository.findOne({
      where: {
        _id: _id,
      },
    });
    return (await this.certificateRepository.remove(site)) ? true : false;
  }
}
