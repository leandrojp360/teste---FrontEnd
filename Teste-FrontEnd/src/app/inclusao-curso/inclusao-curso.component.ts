import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';



@Component({
  selector: 'app-inclusao-curso',
  templateUrl: './inclusao-curso.component.html',
  styleUrls: ['./inclusao-curso.component.css']
})
export class InclusaoCursoComponent {
  Inclusao(){
    alert("Inclusão efetuada com sucesso!")
  }
  constructor(
    private router: Router
  ){ }
  Voltar(){
    this.router.navigate(['teste'])
  }
}
