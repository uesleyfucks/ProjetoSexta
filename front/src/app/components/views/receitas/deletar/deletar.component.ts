import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from 'src/app/models/Receita';
import { ReceitaService } from 'src/app/services/receitas.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class ReceitaDeletarComponent implements OnInit {

  
  panelOpenState = true;  
  receita = new Receita();
  
  //id!:string;
  
  id!:string;
  constructor(private service: ReceitaService,private rout: Router,private route: ActivatedRoute, private snack: MatSnackBar) {
    this.route.params.subscribe(params => this.id = params['id']);
   }


  ngOnInit(): void {
    let receita = new Receita();
    receita._id = this.id;
    this.service.deletar(receita).subscribe((receita) => {
      //console.log(paises);
      this.receita = receita;
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
