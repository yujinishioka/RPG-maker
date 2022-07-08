import { Observable, of } from 'rxjs';
import { Personagem } from './../models/personagem';
import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllPersonagens(): Observable<Personagem[]> {
    let response = this.http.get<Personagem[]>(`${this.baseUrl}/personagens`);
    return response;
  }
}
