import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ProdutoListCompoment } from './produto-list/produto-list.component';
import { ProdutoFormCompoment } from './produto-form/produto-form.component';

import { HomeListCompoment } from './home/home-list.component';

const ProdutoRoutes: Routes = [
    {path: 'list', component: ProdutoListCompoment},
    {path: 'form', component: ProdutoFormCompoment},
    {path: 'form/:id', component: ProdutoFormCompoment},
    {path: 'home', component: HomeListCompoment},

];

@NgModule({
    imports: [RouterModule.forChild(ProdutoRoutes)],
    exports: [RouterModule]
})

export class ProdutoRouting {

}