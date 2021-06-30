import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/paises/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/paises/listar/listar.component';

import { UsuarioCadastrarComponent } from './components/views/usuarios/cadastrar/cadastrar.component';
import { UsuarioListarComponent } from './components/views/usuarios/listar/listar.component';

import { ReceitaCadastrarComponent } from './components/views/receitas/cadastrar/cadastrar.component';
import { ReceitaListarComponent } from './components/views/receitas/listar/listar.component';

const routes: Routes = [
  {
    path:'',
    component:ListarComponent
  },
  {
    path:'paises/listar',
    component:ListarComponent
  },
  {
    path:'paises/cadastrar',
    component: CadastrarComponent
  },
  {
    path:'usuarios/listar',
    component:UsuarioListarComponent
  },
  {
    path:'usuarios/cadastrar',
    component: UsuarioCadastrarComponent
  },
  {
    path:'receitas/listar',
    component:ReceitaListarComponent
  },
  {
    path:'receitas/cadastrar',
    component: ReceitaCadastrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
