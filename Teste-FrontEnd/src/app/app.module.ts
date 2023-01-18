import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { TesteComponent } from './teste/teste.component';
import { InclusaoCursoComponent } from './inclusao-curso/inclusao-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    TesteComponent,
    InclusaoCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
