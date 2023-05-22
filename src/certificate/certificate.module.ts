import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificate } from './entities/certificate.entity';
import { CertificateResolver } from './certificate.resolver';
import { CertificateService } from './certificate.service';

@Module({
  imports: [TypeOrmModule.forFeature([Certificate])],
  providers: [CertificateResolver, CertificateService],
})
export class CertificateModule {}
