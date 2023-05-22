import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      type: 'mongodb',
      // type: 'mongodb',
      url: process.env.DATABASE_URL,
      // entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      // synchronize: true,
      // useNewUrlParser: true,
      // logging: true,

      // host: process.env.DATABASE_HOST,
      // port: parseInt(process.env.DATABASE_PORT),
      // username: process.env.DATABASE_USERNAME,
      // password: process.env.DATABASE_PASSWORD,
      // database: process.env.DATABASE_NAME,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      extra: {
        connectionLimit: parseInt(process.env.DATABASE_CONNECTION_LIMIT),
      },
      // entities: [join(__dirname, '**/**.entity.ts')],
      entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
      // migrations: ['dist/database/migrations/*.ts'],
      // subscribers: ['dist/observers/subscribers/*.subscriber.ts'],
      // cli: {
      //   entitiesDir: 'src/components/**/entity',
      //   migrationsDir: 'src/database/migrations',
      //   subscribersDir: 'src/observers/subscribers',
      // },
    };
  }
}
