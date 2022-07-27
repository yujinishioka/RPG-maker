import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ApiService } from './../../../services/api.service';
import { Alinhamento } from '../../../models/alinhamento';
import { Personagem } from '../../../models/personagem';
import { PersonagemService } from '../../../services/personagem.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-personagem-detalhes',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class PersonagemInfoComponent implements OnInit {

  personagem!: Personagem;
  alinhamento!: Alinhamento;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private personagemService: PersonagemService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getPersonagemFromAPI();
    console.log(`this.personagem: ${this.personagem}`)

  }

  getPersonagem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personagemService.getPersonagem(id)
      .subscribe(personagem => this.personagem = personagem);
  }

  getPersonagemFromAPI(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.apiService.getPersonagem(id).pipe(mergeMap(personagem => {
      this.personagem = personagem;
      return this.apiService.getAlinhamento(personagem.id_alinhamento);
    })).subscribe(alinhamento => this.alinhamento = alinhamento)
  }

  getAlinhamento(): void {
    this.apiService.getAlinhamento(this.personagem.id_alinhamento).subscribe(alinhamento => {
      return this.alinhamento = alinhamento;
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
