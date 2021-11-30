import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioCapecComponent } from './formulario-capec/formulario-capec.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../shared/message/message/message.module';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    FormularioCapecComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    MatSelectModule,
    MatDividerModule
  ],
  exports: [FormularioCapecComponent]
})
export class CapecModule { }
