import { PersonagemService } from '../../services/personagem.service';
import { Personagem } from '../../models/personagem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {

  personagens: Personagem[] = [];

  constructor(private personagemService: PersonagemService) { }

  ngOnInit(): void {
    this.getPersonagens();
  }

  getPersonagens(): void {
    this.personagemService.getPersonagens()
      .subscribe(personagens => this.personagens = personagens);
  }
}
