import { Observable, of } from 'rxjs';
import { Personagem } from './../models/personagem';
import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

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
    console.log('frontend personagem: ', personagem);
    let response = this.http.patch<Personagem>(`${this.baseUrl}/personagens/${personagem.id_personagem}`,  personagem);
    response.toPromise().then(personagem => console.log(personagem));
    return response;
  }
}
