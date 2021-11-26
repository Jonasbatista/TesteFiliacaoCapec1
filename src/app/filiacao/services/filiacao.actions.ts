import { Action } from 'src/app/shared/models/action';
import { Participante } from '../models/participante';

export enum FiliacaoActionsType {
  FILIACAO_GRAVACAO = '[Filiacao - Gravacao] Grava participante na tabela temporaria',
  FILIACAO_ERRO_GRAVACAO = '[Filiacao - Gravacao]  Erro ao gravar participante na tabela temporária',
}

export class GravaFiliacao extends Action {
  constructor(payload: { participante: Participante }) {
    super(FiliacaoActionsType.FILIACAO_GRAVACAO, payload)
  }

}

export class ErroGravaFiliacao extends Action {
  constructor(payload: { erro: string }) {
    super(FiliacaoActionsType.FILIACAO_ERRO_GRAVACAO, payload)
  }
}
