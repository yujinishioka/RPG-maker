import { Test, TestingModule } from '@nestjs/testing';
import { ClasseNivelService } from './classe-nivel.service';

describe('ClasseNivelService', () => {
  let service: ClasseNivelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasseNivelService],
    }).compile();

    service = module.get<ClasseNivelService>(ClasseNivelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
