import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListarComponent } from '../components/views/paises/listar/listar.component';
import { Pais } from '../models/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  baseURL = "http://localhost:4321/";


  constructor(private http:HttpClient) { }
    listar(): Observable<Pais[]>{
      return this.http.get<Pais[]>(`${this.baseURL}pais/listar-pais/`);
    }

    detalhes(pais: Pais): Observable<Pais>{
      console.log(pais._id);
      return this.http.get<Pais>(`${this.baseURL}pais/listar-pais/`+pais._id);
    }

    cadastrar(pais: Pais):Observable<Pais>{
      return this.http.post<Pais>(`${this.baseURL}pais/cadastrar-pais/`, pais);
    }

    cadastrarReceita(idPais: string, idReceita:string):Observable<Pais>{
      var URL! :string;
      URL = this.baseURL+ 'pais/cadastrar-receita/'+idReceita + `/`+ idPais;
      return this.http.post<Pais>(URL,null);
      //return this.http.post<Pais>(`${this.baseURL}pais/cadastrar-receita/`+chave);
    }
}
