import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiliacaoModule } from './filiacao/filiacao.module';
import { CapecModule } from './capec/capec.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app.routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FiliacaoModule,
    HttpClientModule,
    CapecModule,
    MatToolbarModule,
    AppRoutingModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
