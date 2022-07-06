import { Test, TestingModule } from '@nestjs/testing';
import { TipoDanoController } from './tipo-dano.controller';
import { TipoDanoService } from './tipo-dano.service';

describe('TipoDanoController', () => {
  let controller: TipoDanoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoDanoController],
      providers: [TipoDanoService],
    }).compile();

    controller = module.get<TipoDanoController>(TipoDanoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
