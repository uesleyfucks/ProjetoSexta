import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseURL = "http://localhost:4321/";


  constructor(private http:HttpClient) { }
    listar(): Observable<Usuario[]>{
      return this.http.get<Usuario[]>(`${this.baseURL}usuario/listar-usuario`);
    }

    cadastrar(usuario: Usuario):Observable<Usuario>{
      return this.http.post<Usuario>(`${this.baseURL}usuario/cadastrar-usuario/`, usuario);
    }
}
