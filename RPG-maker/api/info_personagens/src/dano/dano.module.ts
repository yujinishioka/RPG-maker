import { Dano } from './entities/dano.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DanoService } from './dano.service';
import { DanoController } from './dano.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Dano])],
  controllers: [DanoController],
  providers: [DanoService],
})
export class DanoModule {}
