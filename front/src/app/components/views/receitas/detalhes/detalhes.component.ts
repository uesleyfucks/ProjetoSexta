import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/models/Receita';
import { ReceitaService } from 'src/app/services/receitas.service';
import { Router, ActivatedRoute, ParamMap  } from "@angular/router";
import { Observable} from 'rxjs';
import { Pais } from 'src/app/models/Pais';



@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class ReceitaDetalhesComponent implements OnInit {

  panelOpenState = true;  
  receita = new Receita();
  pais = new Pais();
  
  //id!:string;
  
  id!:string;
  constructor(private service: ReceitaService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id']);
   }


  ngOnInit(): void {
    let receita = new Receita();
    receita._id = this.id;
    this.service.detalhes(receita).subscribe((receita) => {
      //console.log(paises);
      this.receita = receita;
      
    });
  }

}


