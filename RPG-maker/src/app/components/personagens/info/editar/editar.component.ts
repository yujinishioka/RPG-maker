import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';
import { Personagem } from './../../../../models/personagem';

@Component({
  selector: 'app-personagem-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class PersonagemEditarComponent implements OnInit {

  personagem: Personagem | undefined;
  personagemForm!: FormGroup;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    await this.getPersonagemFromAPI();

    if (this.personagem) {
      this.criarForm(this.personagem);
    }
  }

  getPersonagemFromAPI(): Promise<Personagem | undefined> {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.apiService.getPersonagem(id).toPromise().then(personagem => {
      return this.personagem = personagem;
    });
  }

  criarForm(personagem: Personagem) {
    this.personagemForm = new FormGroup({
      nome_personagem: new FormControl(personagem.nome_personagem),
      titulo: new FormControl(personagem.titulo)
    })
  }

  update() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.personagemForm) {
      this.personagem = this.personagemForm.value as Personagem;
      this.personagem.id_personagem = id;
      this.apiService.updatePersonagem(this.personagem);
    }
  }
}
