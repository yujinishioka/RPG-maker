import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ApiService } from './../../../services/api.service';
import { Personagem } from '../../../models/personagem';
import { PersonagemService } from '../../../services/personagem.service';

@Component({
  selector: 'app-personagem-detalhes',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class PersonagemInfoComponent implements OnInit {

  personagem!: Personagem;

  constructor(
    private route: ActivatedRoute,
    private personagemService: PersonagemService,
    private apiService: ApiService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getPersonagemFromAPI();
  }

  getPersonagem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personagemService.getPersonagem(id)
      .subscribe(personagem => this.personagem = personagem);
  }

  getPersonagemFromAPI(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getPersonagem(id).subscribe(personagem => {
      return this.personagem = personagem;
    });
  }

  goBack(): void {
    this.location.back();
  }

  salvar(): void {
    if (this.personagem != undefined) {
      this.apiService.updatePersonagem(this.personagem).subscribe(personagem => {
        return this.personagem = personagem;
      });
    }
  }
}
