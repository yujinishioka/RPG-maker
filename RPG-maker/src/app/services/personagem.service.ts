import { MensagemService } from './mensagem.service';
import { PERSONAGENS } from '../mock/personagens';
import { Personagem } from '../models/personagem';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  constructor(private mensagemService: MensagemService) { }

  getPersonagens(): Observable<Personagem[]> {
    const personagens = of (PERSONAGENS);
    this.mensagemService.add('PersonagemService: fetched personagens')
    return personagens;
  }

  getPersonagem(id: number): Observable<Personagem> {
    const personagem = PERSONAGENS.find(p => p.idPersonagem === id)!;
    this.mensagemService.add(`PersonagemService: fetched personagem id=${id}`);
    return of(personagem);
  }
}
