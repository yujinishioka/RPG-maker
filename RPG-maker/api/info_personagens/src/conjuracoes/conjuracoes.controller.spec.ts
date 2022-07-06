import { Test, TestingModule } from '@nestjs/testing';
import { ConjuracoesController } from './conjuracoes.controller';
import { ConjuracoesService } from './conjuracoes.service';

describe('ConjuracoesController', () => {
  let controller: ConjuracoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConjuracoesController],
      providers: [ConjuracoesService],
    }).compile();

    controller = module.get<ConjuracoesController>(ConjuracoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
