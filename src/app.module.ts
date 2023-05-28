import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';
import { join } from 'path';
import { PrismaService } from './prisma.service';
import { UserResolver } from './user/user.resolver';
const schema =
  process.env.NODE_ENV === 'development'
    ? join(process.cwd(), 'src/schema.gql')
    : '/tmp/src/schema.gql';

@UseFilters(new HttpExceptionFilter())
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: schema,
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
    }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  providers: [PrismaService, UserResolver],
})
export class AppModule {}
