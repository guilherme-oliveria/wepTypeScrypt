import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CategoryListComponent} from './category-list/category-list.componente';
import {CategoryFormComponent } from './category-form/category-form.componente';
import { CategoryViewCompoment } from './category-view/category-view.componente';

const CategoryRoutes: Routes = [
    {path:'list', component : CategoryListComponent},
    {path:'form', component : CategoryFormComponent},
    {path:'form/:id', component : CategoryFormComponent},//alterar
    {path:'view', component: CategoryViewCompoment},
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild(CategoryRoutes) ],
    exports: [RouterModule],
    providers: [],
})
export class CategoryRouting {}