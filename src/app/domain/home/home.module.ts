import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//routing 
import { HomeRouting } from './home-routing.module';

//Service
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Component
import { HomeCompoment } from './home.component';
import { ProdutoModule } from '../produto/produto.module';
import { ProdutoService } from '../produto/produto.service';


@NgModule({
  declarations: [
    //Componentes
    HomeCompoment
  ],
  imports: [
    // angular
    HttpModule,
    RouterModule,
    CommonModule,

    // Routing
    HomeRouting,

    //Form
    FormsModule,
    ReactiveFormsModule,
    ProdutoModule
  ],
  providers: [
    // services
    ProdutoService
  ]

})
export class HomeModule{}