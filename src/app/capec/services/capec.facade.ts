import { Injectable } from '@angular/core';
import { Action } from 'src/app/shared/models/action';
import { CapecActionsType } from './capec.actions';
import { CapecService } from './capec.service';
import { RespostaGravacao } from '../models/resposta-gravacao';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

class PlanoCapecState {
  carregando!: boolean;
  resposta!: RespostaGravacao;
  erro!: string;
}

@Injectable({
  providedIn: 'root'
})
export class CapecFacade {

  private state = new PlanoCapecState();
  private behavior = new BehaviorSubject<PlanoCapecState>(this.state);

  constructor(private capecService: CapecService) { }

  erro$ = this.behavior.asObservable().pipe(
    map(state => state.erro)
  )

  respostaGravacao$ = this.behavior.asObservable().pipe(
    map(state => state.resposta)
  )

  dispatch(action: Action) {
    switch (action.type) {
      case CapecActionsType.CAPEC_GRAVACAO:
        this.capecService.postBeneficiario(action.payload.formulario).subscribe({
          next: resposta => {
            if (resposta.erros) {
              this.behavior.next({
                ...this.behavior.value,
                carregando: false,
                erro: resposta.erros[0].mensagem
              })
            }
            else if (resposta.erro) {
              this.behavior.next({
                ...this.behavior.value,
                carregando: false,
                erro: resposta.erro
              })
            }
            else {
              console.log(resposta);
              this.behavior.next({
                ...this.behavior.value,
                carregando: false,
                erro: '',
                resposta
              })
            }
          }, error: error => this.trataErro(error)
        })
        break;
      default:
        break;
    }
  }

  private trataErro(erro: HttpErrorResponse) {
    if (erro.status === 403) {
      console.log(erro.status);
    }
    this.behavior.next({
      ...this.behavior.value,
      carregando: false,
      erro: 'Erro ao gravar filiação!'
    });
  }

}
