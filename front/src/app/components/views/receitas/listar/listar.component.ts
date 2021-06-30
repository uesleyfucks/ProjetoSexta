import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/models/Receita';
import { ReceitaService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ReceitaListarComponent implements OnInit {

  
  receitas : Receita[] = [];

  constructor(private service: ReceitaService) {
    
   }

  ngOnInit(): void {
    this.service.listar().subscribe((receitas) => {
      //console.log(paises);
      this.receitas = receitas;
    });
  }

}
