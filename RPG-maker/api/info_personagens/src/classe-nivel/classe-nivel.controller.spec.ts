import { Test, TestingModule } from '@nestjs/testing';
import { ClasseNivelController } from './classe-nivel.controller';
import { ClasseNivelService } from './classe-nivel.service';

describe('ClasseNivelController', () => {
  let controller: ClasseNivelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClasseNivelController],
      providers: [ClasseNivelService],
    }).compile();

    controller = module.get<ClasseNivelController>(ClasseNivelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
