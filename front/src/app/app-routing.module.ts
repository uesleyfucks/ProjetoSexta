import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/paises/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/paises/listar/listar.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
