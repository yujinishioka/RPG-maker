import { Test, TestingModule } from '@nestjs/testing';
import { ClasseService } from './classe.service';

describe('ClasseService', () => {
  let service: ClasseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasseService],
    }).compile();

    service = module.get<ClasseService>(ClasseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
