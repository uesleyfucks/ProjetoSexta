import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'src/app/services/receitas.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Receita } from 'src/app/models/Receita';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class ReceitaCadastrarComponent implements OnInit {

  nomeReceita! : String;
  ingrediente! : String;
  modoPreparo! : String;
  tempoPreparo! : String;
  rendimento! : String;
  
  constructor(private service: ReceitaService, private router: Router, private snack: MatSnackBar) { }


  ngOnInit(): void {
    this.nomeReceita = "";
    this.ingrediente = "";
    this.modoPreparo = "";
    this.tempoPreparo = "";
    this.rendimento = "";
  }

  
  cadastrar(): void {
    let receita = new Receita();
    receita.ingrediente = this.ingrediente;
    receita.modoPreparo = this.modoPreparo;
    receita.nomeReceita = this.nomeReceita;
    receita.rendimento = this.rendimento;
    receita.tempoPreparo = this.tempoPreparo;

    this.service.cadastrar(receita).subscribe((receita) =>{
      console.log(receita);
      this.snack.open("Receita cadastrada", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }

}








