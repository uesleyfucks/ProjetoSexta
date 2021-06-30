import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {
  
  email!: string;
  senha!: string;
  username!: string;
  constructor(private service: UsuarioService, private router: Router, private snack: MatSnackBar) { }


  ngOnInit(): void {
    this.email = "";
    this.senha = "";
    this.username = "";
  }

  cadastrar(): void {
    let usuario = new Usuario();
    usuario.email = this.email;
    usuario.senha = this.senha;
    usuario.username = this.username;

    this.service.cadastrar(usuario).subscribe((usuario) =>{
      console.log(usuario);
      this.snack.open("Usuario cadastrado", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }

}





