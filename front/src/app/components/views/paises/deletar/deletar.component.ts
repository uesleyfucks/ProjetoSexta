import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from 'src/app/models/Receita';
import { ReceitaService } from 'src/app/services/receitas.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { PaisService } from 'src/app/services/pais.service';
import { Pais } from 'src/app/models/Pais';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class PaisDeletarComponent implements OnInit {  

  pais = new Pais();

  id!:string;
  constructor(private service: PaisService,private rout: Router,private route: ActivatedRoute, private snack: MatSnackBar) {
    this.route.params.subscribe(params => this.id = params['id']);
   }


  ngOnInit(): void {
    let pais = new Pais();
    pais._id = this.id;
    this.service.deletar(pais).subscribe((pais) => {
      //console.log(paises);
      this.pais = pais;
      this.snack.open("Pais excluido com sucesso!", "", {
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
