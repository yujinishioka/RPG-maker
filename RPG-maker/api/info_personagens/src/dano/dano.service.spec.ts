import { Test, TestingModule } from '@nestjs/testing';
import { DanoService } from './dano.service';

describe('DanoService', () => {
  let service: DanoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DanoService],
    }).compile();

    service = module.get<DanoService>(DanoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
