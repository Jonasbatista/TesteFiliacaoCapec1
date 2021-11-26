
import { Component, OnInit } from '@angular/core';
import { Participante } from '../models/participante';

import { FiliacaoFacade } from '../services/filiacao.facade';
import { GravaFiliacao, ErroGravaFiliacao } from '../services/filiacao.actions';

@Component({
  selector: 'app-formulario-filiacao',
  templateUrl: './formulario-filiacao.component.html',
  styleUrls: ['./formulario-filiacao.component.css']
})
export class FormularioFiliacaoComponent implements OnInit {

  participante!: Participante;

  nome!: string;
  CPF!: string;
  dataNascimento!: Date;
  email!: string;
  telefone!: string;

  constructor(public filiacaoFacade: FiliacaoFacade) { }

  ngOnInit(): void {
  }

  salvarParticipante() {

    let participante: Participante = {
      nome: this.nome,
      CPF: this.CPF,
      dataNascimento: this.dataNascimento,
      email: this.email,
      telefone: this.telefone
    }

    this.filiacaoFacade.dispatch(new GravaFiliacao({ participante }));

    this.limparFormulario();

  }

  limparFormulario() {
    this.nome = '';
    this.CPF = '';
    this.dataNascimento = new Date;
    this.email = '';
    this.telefone = '';

  }

}
