import { Test, TestingModule } from '@nestjs/testing';
import { DanoController } from './dano.controller';
import { DanoService } from './dano.service';

describe('DanoController', () => {
  let controller: DanoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DanoController],
      providers: [DanoService],
    }).compile();

    controller = module.get<DanoController>(DanoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
