import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule} from '@angular/material/divider';
import { MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



import { HeaderComponent } from './components/template/header/header.component';
//import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
//import { ListarComponent } from './components/views/listar/listar.component';
import { ContentComponent } from './components/template/content/content.component';
import { ListarComponent } from './components/views/paises/listar/listar.component';
import { CadastrarComponent } from './components/views/paises/cadastrar/cadastrar.component';

import { UsuarioListarComponent } from './components/views/usuarios/listar/listar.component';
import { UsuarioCadastrarComponent } from './components/views/usuarios/cadastrar/cadastrar.component';

import { ReceitaListarComponent } from './components/views/receitas/listar/listar.component';
import { ReceitaCadastrarComponent } from './components/views/receitas/cadastrar/cadastrar.component';
import { ReceitaDetalhesComponent } from './components/views/receitas/detalhes/detalhes.component';
import { PaisDetalhesComponent } from './components/views/paises/detalhes/detalhes.component';
import { UsuarioLoginComponent } from './components/views/usuarios/login/login.component';
import { ReceitaDeletarComponent } from './components/views/receitas/deletar/deletar.component';
import { DeletarReceitaComponent } from './components/views/paises/deletarreceita/deletarreceita.component';
import { PaisDeletarComponent } from './components/views/paises/deletar/deletar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
         ListarComponent,
         CadastrarComponent,
         UsuarioListarComponent,
         UsuarioCadastrarComponent,
         ReceitaListarComponent,
         ReceitaCadastrarComponent,
         ReceitaDetalhesComponent,
         PaisDetalhesComponent,
         UsuarioLoginComponent,
         ReceitaDeletarComponent,
         DeletarReceitaComponent,
         PaisDeletarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDividerModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatSlideToggleModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
