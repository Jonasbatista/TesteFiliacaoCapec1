
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormularioParticipante } from '../models/participante';
import { FiliacaoFacade } from '../services/filiacao.facade';
import { GravaFiliacao, ErroGravaFiliacao } from '../services/filiacao.actions';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-formulario-filiacao',
  templateUrl: './formulario-filiacao.component.html',
  styleUrls: ['./formulario-filiacao.component.css']
})
export class FormularioFiliacaoComponent implements OnInit {

  @ViewChild('formParticipante') formParticipante!: FormGroupDirective;

  formularioParticipante: FormGroup;

  constructor(public filiacaoFacade: FiliacaoFacade, private fb: FormBuilder) {

    this.formularioParticipante = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]]

    });
  }

  ngOnInit(): void {
  }

  submit() {

    let formulario: FormularioParticipante = {
      nome: this.formularioParticipante.value.nome,
      CPF: this.formularioParticipante.value.cpf,
      dataNascimento: this.formularioParticipante.value.dataNascimento,
      email: this.formularioParticipante.value.email,
      telefone: this.formularioParticipante.value.telefone
    }

    console.log(formulario);
    this.filiacaoFacade.dispatch(new GravaFiliacao({ formulario }));

    this.limparFormulario();

  }

  limparFormulario() {
    this.formularioParticipante.reset();
    this.formParticipante.resetForm();
  }

}
