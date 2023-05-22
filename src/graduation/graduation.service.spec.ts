import { Test, TestingModule } from '@nestjs/testing';
import { GraduationService } from './graduation.service';

describe('GraduationService', () => {
  let service: GraduationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraduationService],
    }).compile();

    service = module.get<GraduationService>(GraduationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
