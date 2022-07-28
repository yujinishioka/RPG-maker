import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ApiService } from './../../../services/api.service';
import { Alinhamento } from '../../../models/alinhamento';
import { Personagem } from '../../../models/personagem';
import { mergeMap } from 'rxjs';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-personagem-detalhes',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class PersonagemInfoComponent implements OnInit {

  personagem!: Personagem;
  status!: Status[];
  alinhamento!: Alinhamento;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getPersonagemFromAPI();
    console.log(`this.personagem: ${this.personagem}`)

  }

  getPersonagemFromAPI(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.apiService.getPersonagem(id).pipe(mergeMap(personagem => {
      this.personagem = personagem;
      return this.apiService.getAlinhamento(personagem.id_alinhamento);
    })
    ).subscribe(alinhamento => this.alinhamento = alinhamento);

    this.apiService.getPersonagemStatus(id).subscribe(status => this.status = status);
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
