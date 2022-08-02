import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { Alinhamento } from "../models/alinhamento";
import { Classe } from "../models/classe";
import { Personagem } from './../models/personagem';
import { Status } from "../models/status";

import { environment } from './../../environments/environment';

@Injectable()
export class ApiService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllPersonagens(): Observable<Personagem[]> {
    let response = this.http.get<Personagem[]>(`${this.baseUrl}/personagens`);
    return response;
  }

  getPersonagem(id: number): Observable<Personagem> {
    let response = this.http.get<Personagem>(`${this.baseUrl}/personagens/${id}`);
    return response;
  }

  updatePersonagem(personagem: Personagem): Observable<Personagem> {
    let response = this.http.patch<Personagem>(`${this.baseUrl}/personagens/${personagem.id_personagem}`,  personagem);
    response.toPromise().then(personagem => console.log(personagem));
    return response;
  }

  getAllAlinhamentos(): Observable<Alinhamento[]> {
    let response = this.http.get<Alinhamento[]>(`${this.baseUrl}/alinhamentos`);
    return response
  }

  getAlinhamento(id:number): Observable<Alinhamento> {
    let response = this.http.get<Alinhamento>(`${this.baseUrl}/alinhamentos/${id}`);
    return response;
  }

  getAllClasses(): Observable<Classe[]> {
    let response = this.http.get<Classe[]>(`${this.baseUrl}/classes`);
    return response
  }

  getClasse(id: number): Observable<Classe> {
    let response = this.http.get<Classe>(`${this.baseUrl}/classes/${id}`);
    return response;
  }

  getPersonagemStatus(id_personagem: number): Observable<Status[]> {
    let response = this.http.get<Status[]>(`${this.baseUrl}/status/personagem/${id_personagem}`);
    return response;
  }
}
