import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioBeneficiario } from '../models/beneficiario';
import { GravaCapec, ErroGravaCapec } from '../services/capec.actions';
import { CapecFacade } from '../services/capec.facade';

interface Vinculo {
  vlr: number, display: string
}

@Component({
  selector: 'app-formulario-capec',
  templateUrl: './formulario-capec.component.html',
  styleUrls: ['./formulario-capec.component.css']
})

export class FormularioCapecComponent implements OnInit {

  vinculo: Vinculo[] = [
    { vlr: 1, display: 'Mãe' },
    { vlr: 2, display: 'Pai' },
    { vlr: 3, display: 'Irmão' },
    { vlr: 4, display: 'Irmã' }

  ];

  formularioCapec = this.fb.group({
    beneficiario: this.fb.array([
      this.fb.group({
        nome: ['', [Validators.required]],
        dataNascimento: ['', [Validators.required]],
        vinculo: ['', [Validators.required]],
        percentual: ['', [Validators.required]]
      })
    ])
  });

  beneficiario = this.formularioCapec.get('beneficiario') as FormArray;

  constructor(private fb: FormBuilder, public capecFacade: CapecFacade) { }


  ngOnInit(): void {
  }

  adicionaBeneficiario() {
    this.beneficiario.push(
      this.fb.group({
        nome: ['', [Validators.required]],
        dataNascimento: ['', [Validators.required]],
        vinculo: ['', [Validators.required]],
        percentual: ['', [Validators.required]]
      })
    );
  }


  retiraBeneficiario(index: number) {
    this.beneficiario.removeAt(index);
  }

  submit() {

    let totalPercentual: number = 0;


    let formulario: FormularioBeneficiario = {
      nome: this.formularioCapec.value.nome,
      dataNascimento: this.formularioCapec.value.dataNascimento,
      vinculo: this.formularioCapec.value.vinculo,
      percentual: this.formularioCapec.value.percentual
    }


    // verificar o percentual total gravado:
    this.formularioCapec.value.beneficiario.forEach((element: any) => {
      totalPercentual = totalPercentual + element.percentual;
    });


    this.capecFacade.dispatch(new GravaCapec({ formulario }));

    console.log(this.formularioCapec.value);
  }

  limparFormulario() {
    this.formularioCapec.reset();
  }
}
