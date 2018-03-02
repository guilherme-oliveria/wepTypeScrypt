import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Adicionar o modulo HTTP
import { HttpModule } from '@angular/http';

//Adicionar as rotas
  import { RouterModule, Routes } from '@angular/router';

// importar todos os componentes
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoryListComponent } from './domain/category/category-list/category-list.componente';

// Importar todos os Serviços
import {ProdutoService} from './produto/produto.service';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import {CarrinhoService} from './carrinho/carrinho.service';
import { CategoryService } from './domain/category/category.service';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    CategoriaComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,  
    HttpModule,
    RouterModule
  ],
  providers: [
    ProdutoService,
    CarrinhoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
