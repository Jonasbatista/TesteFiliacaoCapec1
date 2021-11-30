import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RespostaGravacao } from '../models/resposta-gravacao';
import { FormularioBeneficiario } from '../models/beneficiario';

const API = environment.api;

@Injectable({
  providedIn: 'root'
})
export class CapecService {

  constructor(private http: HttpClient) { }

  postBeneficiario(beneficiario: FormularioBeneficiario): Observable<RespostaGravacao> {
    return this.http.post<RespostaGravacao>(API + '/grava_beneficiario', beneficiario);
  }
}
