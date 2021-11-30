import { Action } from 'src/app/shared/models/action';
import { FormularioBeneficiario } from '../models/beneficiario';

export enum CapecActionsType {
  CAPEC_GRAVACAO = '[CAPEC - Gravacao] Grava beneficiário na tabela temporária',
  CAPEC_ERRO_GRAVACAO = '[CAPEC - Gravacao]  Erro ao gravar beneficiário na tabela temporária',
}

export class GravaCapec extends Action {
  constructor(payload: { formulario: FormularioBeneficiario }) {
    super(CapecActionsType.CAPEC_GRAVACAO, payload)
  }

}

export class ErroGravaCapec extends Action {
  constructor(payload: { erro: string }) {
    super(CapecActionsType.CAPEC_ERRO_GRAVACAO, payload)
  }
}
