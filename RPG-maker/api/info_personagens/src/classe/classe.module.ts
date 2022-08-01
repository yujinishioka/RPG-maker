import { Module } from '@nestjs/common';
import { ClasseService } from './classe.service';
import { ClasseController } from './classe.controller';

@Module({
  controllers: [ClasseController],
  providers: [ClasseService]
})
export class ClasseModule {}
