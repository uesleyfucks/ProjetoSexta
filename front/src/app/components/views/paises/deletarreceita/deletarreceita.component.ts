import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from 'src/app/models/Receita';
import { ReceitaService } from 'src/app/services/receitas.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { PaisService } from 'src/app/services/pais.service';



@Component({
  selector: 'app-deletarreceita',
  templateUrl: './deletarreceita.component.html',
  styleUrls: ['./deletarreceita.component.css']
})
export class DeletarReceitaComponent implements OnInit {

  idReceita!:string;
  idPais!:string;
  constructor(private service: PaisService,private rout: Router,private route: ActivatedRoute, private snack: MatSnackBar) {
    this.route.params.subscribe(params => {
      this.idPais = params['idPais'],
      this.idReceita = params['idReceita']
    });
   }


   ngOnInit(): void {

    this.service.deletarReceita(this.idReceita,this.idPais).subscribe((pais) => {
      //console.log(paises);
      this.snack.open("Receita excluida com sucesso!", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });

     var URL! :string;
     URL = "";
     this.rout.navigateByUrl(URL);
      
    });
  }

}
 
 


