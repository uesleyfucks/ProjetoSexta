import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/Pais';
import { PaisService } from 'src/app/services/pais.service';
import { Router, ActivatedRoute, ParamMap  } from "@angular/router";
import { Observable} from 'rxjs';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class PaisDetalhesComponent implements OnInit {
  
  pais = new Pais();
    
  id!:string;
  constructor(private service: PaisService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id']);
   }


   ngOnInit(): void {
    let pais = new Pais();
    pais._id = this.id;
    this.service.detalhes(pais).subscribe((pais) => {
      //console.log(paises);
      this.pais = pais;
      console.log(pais.receitas)
    });
  }

}



