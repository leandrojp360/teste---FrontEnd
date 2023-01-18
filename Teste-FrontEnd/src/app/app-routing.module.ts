import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InclusaoCursoComponent } from './inclusao-curso/inclusao-curso.component';
import { TesteComponent } from './teste/teste.component';

const routes: Routes = [
  {path: "inclusao-curso", component: InclusaoCursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
