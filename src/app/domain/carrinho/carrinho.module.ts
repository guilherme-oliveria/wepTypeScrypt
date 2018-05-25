import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//routing 
import { CarrinhoRouting } from './carrinho-routing.module';

//Service
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Component
import { CarrinhoComponent } from './carrinho.component';
import { ProdutoModule } from '../produto/produto.module';
import { ProdutoService } from '../produto/produto.service';
import { CarrinhoService } from './carrinho.service';

@NgModule({
  declarations: [
    //Componentes
    CarrinhoComponent
  ],
  imports: [
    // angular
    HttpModule,
    RouterModule,
    CommonModule,

    // Routing
    CarrinhoRouting,

    //Form
    FormsModule,
    ReactiveFormsModule,
    ProdutoModule
  ],
  providers: [
    // services
    ProdutoService,
    CarrinhoService
  ]

})
export class CarrinhoModule { }