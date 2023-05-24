import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ContactModule } from './contact/contact.module';
import { ProjectModule } from './project/project.module';
import { CertificateModule } from './certificate/certificate.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config';
import { TypeormService } from './config/typeorm/typeorm.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeormModule } from './config/typeorm/typeorm.module';
import { GraduationModule } from './graduation/graduation.module';
import { UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';
import { upperDirectiveTransformer } from './common/directives/upper-case.directive';

// import { GraphqlService } from './config/graphql/graphql.service';
// import { PubSub } from 'graphql-subscriptions';

// const pubSub = new PubSub();

// const directiveResolvers = {
//   isAuthenticated: (next, source, args, ctx) => {
//     const { currentUser } = ctx;

//     if (!currentUser) {
//       throw new Error('You are not authenticated!');
//     }

//     return next();
//   },
//   hasRole: (next, source, args, ctx) => {
//     const { role } = args;
//     const { currentUser } = ctx;

//     if (!currentUser) {
//       throw new Error('You are not authenticated!');
//     }

//     if (role !== currentUser.role) {
//       throw new Error(
//         `Must have role: ${role}, you have role: ${currentUser.role}`,
//       );
//     }
//     return next();
//   },
// };

@UseFilters(new HttpExceptionFilter())
@Module({
  imports: [
    TypeormModule,
    UserModule,
    ContactModule,
    ProjectModule,
    CertificateModule,
    GraduationModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeormService,
    }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
