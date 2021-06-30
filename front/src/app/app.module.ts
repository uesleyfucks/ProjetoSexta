import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
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
import {  MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule} from '@angular/material/divider';


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
         ReceitaCadastrarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
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
    MatDividerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
