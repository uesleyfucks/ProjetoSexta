import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/Pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  paises : Pais[] = [];

  constructor(private service: PaisService) {
    
   }

  ngOnInit(): void {
    this.service.listar().subscribe((paises) => {
      //console.log(paises);
      this.paises = paises;
    });
  }

}
