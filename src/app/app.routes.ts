import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes: Routes =[
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {path:'home', loadChildren: 'app/domain/home/home.module#HomeModule'},
    {path:'category', loadChildren: 'app/domain/category/category.module#CategoryModule'},
    {path:'produto', loadChildren: 'app/domain/produto/produto.module#ProdutoModule'},
    {path:'carrinho', loadChildren: 'app/domain/carrinho/carrinho.module#CarrinhoModule'}

];

@NgModule({
    imports: [
          RouterModule.forRoot(
             appRoutes,
        { enableTracing: true }
      )
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
