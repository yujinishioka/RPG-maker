import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Personagem } from '../../../models/personagem';
import { PersonagemService } from '../../../services/personagem.service';

@Component({
  selector: 'app-personagem-detalhes',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class PersonagemDetalhesComponent implements OnInit {
  personagem: Personagem | undefined;

  constructor(
    private route: ActivatedRoute,
    private personagemService: PersonagemService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getPersonagem();
  }

  getPersonagem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personagemService.getPersonagem(id)
      .subscribe(personagem => this.personagem = personagem);
  }

  goBack(): void {
    this.location.back();
  }
}
