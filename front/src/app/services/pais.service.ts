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

    cadastrar(pais: Pais):Observable<Pais>{
      return this.http.post<Pais>(`${this.baseURL}pais/cadastrar-pais/`, pais);
    }
}
