import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/Pais';
import { PaisService } from 'src/app/services/pais.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  nomePais!: string;

  //constructor(private service: PaisService) { }
  constructor(private service: PaisService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.nomePais = "";
  }

  cadastrar(): void {
    let pais = new Pais();
    pais.nomePais = this.nomePais;
    this.service.cadastrar(pais).subscribe((pais) =>{
      console.log(pais);
      this.snack.open("Pais cadastrado", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }
}
