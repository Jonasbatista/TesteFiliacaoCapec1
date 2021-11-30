import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioCapecComponent } from './capec/formulario-capec/formulario-capec.component';
import { FormularioFiliacaoComponent } from './filiacao/formulario-filiacao/formulario-filiacao.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'filiacao', component: FormularioFiliacaoComponent },
  { path: 'capec', component: FormularioCapecComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
