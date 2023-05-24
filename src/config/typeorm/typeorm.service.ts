import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      type: (process.env.DATABASE_TYPE as 'mongodb') || 'mongodb',
      url: process.env.DATABASE_URL,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      extra: {
        connectionLimit: parseInt(process.env.DATABASE_CONNECTION_LIMIT),
      },
      entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
    };
  }
}
