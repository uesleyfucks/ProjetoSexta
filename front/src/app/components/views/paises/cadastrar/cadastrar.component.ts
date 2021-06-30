import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/Pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  nomePais!: string;

  constructor(private service: PaisService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    let pais = new Pais();
    pais.nomePais = this.nomePais;
    this.service.cadastrar(pais).subscribe((pais) =>{
      console.log(pais);
    })
  }
}
