import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { mergeMap } from 'rxjs';

import { ApiService } from './../../../services/api.service';
import { Alinhamento } from '../../../models/alinhamento';
import { Personagem } from '../../../models/personagem';
import { Classe } from '../../../models/classe';
import { Status } from '../../../models/status';

@Component({
  selector: 'app-personagem-detalhes',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class PersonagemInfoComponent implements OnInit {

  personagem!: Personagem;
  alinhamento!: Alinhamento;
  classe!: Classe;
  status!: Status[];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getPersonagemFromAPI();
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

  // getClasse()

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
