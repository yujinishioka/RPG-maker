import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    Bem-vindo a API de Dados. Para vizualizar os dados, digite:
    /alinhamentos
    `;
  }
}
