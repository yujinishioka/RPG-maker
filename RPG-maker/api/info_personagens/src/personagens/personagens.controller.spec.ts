import { Test, TestingModule } from '@nestjs/testing';
import { PersonagensController } from './personagens.controller';
import { PersonagensService } from './personagens.service';

describe('PersonagensController', () => {
  let controller: PersonagensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonagensController],
      providers: [PersonagensService],
    }).compile();

    controller = module.get<PersonagensController>(PersonagensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
