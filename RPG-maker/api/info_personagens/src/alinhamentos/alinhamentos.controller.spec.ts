import { Test, TestingModule } from '@nestjs/testing';
import { AlinhamentosController } from './alinhamentos.controller';
import { AlinhamentosService } from './alinhamentos.service';

describe('AlinhamentosController', () => {
  let controller: AlinhamentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlinhamentosController],
      providers: [AlinhamentosService],
    }).compile();

    controller = module.get<AlinhamentosController>(AlinhamentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
