import { PersonagemService } from '../../services/personagem.service';
import { Personagem } from '../../models/personagem';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {

  personagens: Personagem[] = [];

  constructor(
    private personagemService: PersonagemService,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getPersonagensFromAPI();
  }

  getPersonagens(): void {
    this.personagemService.getPersonagens()
      .subscribe(personagens => this.personagens = personagens);
  }

  getPersonagensFromAPI(): void {
    this.apiService.getAllPersonagens()
      .subscribe(personagens => this.personagens = personagens);
  }
}
