import { Component,OnInit } from '@angular/core';
import { InclusaoCursoComponent } from '../inclusao-curso/inclusao-curso.component';
import { Router} from '@angular/router';



@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {
  constructor( 
    private router: Router
    ) { }

    ProximaPagina() {
      this.router.navigate(["inclusao-curso"]);

    }



}
