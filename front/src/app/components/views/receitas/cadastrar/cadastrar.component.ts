import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'src/app/services/receitas.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Receita } from 'src/app/models/Receita';
import { Pais } from 'src/app/models/Pais';
import { PaisService } from 'src/app/services/pais.service';
import { FormControl} from '@angular/forms';
import { Observable} from 'rxjs';
import { map, startWith} from 'rxjs/operators';

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
  idpais? :string;

  paises : Pais[] = [];
  
  myControl: FormControl = new FormControl();


  filteredOptions: Observable<Pais[]>;
  
  constructor(private servicePais: PaisService, private service: ReceitaService, private router: Router, private snack: MatSnackBar) {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

   }


  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.servicePais.listar().subscribe((paises) => {
      this.paises = paises;
    });
    
   
    this.nomeReceita = "";
    this.ingrediente = "";
    this.modoPreparo = "";
    this.tempoPreparo = "";
    this.rendimento = "";
  }

  // onSelFunc(option){
  //   console.log(option);
  // }

  private _filter(value: string): Pais[] {
    const filterValue = value.toLowerCase();
    return this.paises.filter(option => option.nomePais.toLowerCase().includes(filterValue));
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

      
    this.idpais = "60de0ac1843a9d3648b6b0eb";
    
    this.servicePais.cadastrarReceita(this.idpais,receita._id).subscribe((pais) =>{
      console.log(pais);
      this.snack.open("Receita cadastrada", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });

     var URL! :string;
     URL = "paises/detalhes/" +this.idpais;
     this.router.navigateByUrl(URL);
    });

    });
  }
}








