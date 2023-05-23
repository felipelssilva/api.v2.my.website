import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Graduation } from './entities/graduation.entity';
import { GraduationResolver } from './graduation.resolver';
import { GraduationService } from './graduation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Graduation])],
  providers: [GraduationResolver, GraduationService],
  exports: [GraduationService],
})
export class GraduationModule {}
