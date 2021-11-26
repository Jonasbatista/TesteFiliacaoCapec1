import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Participante } from '../models/participante';
import { RespostaGravacao } from '../models/resposta-gravacao';

const API = environment.api;

@Injectable({
  providedIn: 'root'
})
export class FiliacaoService {

  constructor(private http: HttpClient) { }

  postParticipante(participante: Participante): Observable<RespostaGravacao> {
    return this.http.post<RespostaGravacao>(API + '/grava_participante', participante);
  }
}
