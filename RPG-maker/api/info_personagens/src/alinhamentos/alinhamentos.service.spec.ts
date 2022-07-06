import { Test, TestingModule } from '@nestjs/testing';
import { AlinhamentosService } from './alinhamentos.service';

describe('AlinhamentosService', () => {
  let service: AlinhamentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlinhamentosService],
    }).compile();

    service = module.get<AlinhamentosService>(AlinhamentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
