import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioFiliacaoComponent } from './formulario-filiacao/formulario-filiacao.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MessageModule } from '../shared/message/message/message.module';

@NgModule({
  declarations: [
    FormularioFiliacaoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MessageModule
  ],
  exports: [
    FormularioFiliacaoComponent
  ]
})
export class FiliacaoModule { }
