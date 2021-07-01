import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receita } from '../models/Receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  baseURL = "http://localhost:4321/";


  constructor(private http:HttpClient) { }
    listar(): Observable<Receita[]>{
      return this.http.get<Receita[]>(`${this.baseURL}receita/listar-receita/`);
    }

    detalhes(receita: Receita): Observable<Receita>{
      console.log(receita._id);
      return this.http.get<Receita>(`${this.baseURL}receita/listar-receita/`+receita._id);
    }

    cadastrar(receita: Receita):Observable<Receita>{
      return this.http.post<Receita>(`${this.baseURL}receita/cadastrar-receita/`, receita);
    }
}
