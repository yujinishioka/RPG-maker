import { Personagem } from '../../models/personagem';
import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../../services/personagem.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  personagens: Personagem[] = [];

  constructor(private personagemService: PersonagemService) { }

  ngOnInit(): void {
    this.getPersonagens();
  }

  getPersonagens(): void {
    this.personagemService.getPersonagens()
      .subscribe(personagens => this.personagens = personagens.slice(0, 4));
  }
}
