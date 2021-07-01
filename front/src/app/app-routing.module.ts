import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/paises/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/paises/listar/listar.component';
import { PaisDetalhesComponent } from './components/views/paises/detalhes/detalhes.component';
import { PaisDeletarComponent } from './components/views/paises/deletar/deletar.component';
import { DeletarReceitaComponent } from './components/views/paises/deletarreceita/deletarreceita.component';


import { UsuarioCadastrarComponent } from './components/views/usuarios/cadastrar/cadastrar.component';
import { UsuarioListarComponent } from './components/views/usuarios/listar/listar.component';
import { UsuarioLoginComponent } from './components/views/usuarios/login/login.component';

import { ReceitaCadastrarComponent } from './components/views/receitas/cadastrar/cadastrar.component';
import { ReceitaListarComponent } from './components/views/receitas/listar/listar.component';
import { ReceitaDetalhesComponent } from './components/views/receitas/detalhes/detalhes.component';
import { ReceitaDeletarComponent } from './components/views/receitas/deletar/deletar.component';

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
    path:'paises/detalhes/:id',
    component: PaisDetalhesComponent
  },
  {
    path:'paises/deletar/:id',
    component: PaisDeletarComponent
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
    path:'usuarios/login',
    component: UsuarioLoginComponent
  },
  {
    path:'receitas/listar',
    component:ReceitaListarComponent
  },
  {
    path:'receitas/cadastrar',
    component: ReceitaCadastrarComponent
  }
  ,
  {
    path:'receitas/deletar/:id',
    component: ReceitaDeletarComponent
  } ,
  {
    path:'paises/deletarreceita/:idReceita/:idPais',
    component: DeletarReceitaComponent
  }, 

  {
    path:'receitas/detalhes/:id',
    component: ReceitaDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
