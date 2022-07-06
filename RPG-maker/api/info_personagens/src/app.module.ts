import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDanoModule } from './tipo-dano/tipo-dano.module';
import { DanoModule } from './dano/dano.module';
import { ConjuracoesModule } from './conjuracoes/conjuracoes.module';
import { AlinhamentosModule } from './alinhamentos/alinhamentos.module';
import { PersonagensModule } from './personagens/personagens.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRESS_HOST,
      port: parseInt(<string>process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
    }),
    TipoDanoModule,
    DanoModule,
    ConjuracoesModule,
    AlinhamentosModule,
    PersonagensModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
