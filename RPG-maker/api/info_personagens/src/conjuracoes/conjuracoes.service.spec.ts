import { Test, TestingModule } from '@nestjs/testing';
import { ConjuracoesService } from './conjuracoes.service';

describe('ConjuracoesService', () => {
  let service: ConjuracoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConjuracoesService],
    }).compile();

    service = module.get<ConjuracoesService>(ConjuracoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
