import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CategoryListComponent} from './category-list/category-list.componente';
import {CategoryFormComponent } from './category-form/category-form.componente';


const CategoryRoutes: Routes = [
    {
        path:'', component : CategoryListComponent},
        {path:'form' , component : CategoryFormComponent
    },
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild(CategoryRoutes) ],
    exports: [RouterModule],
    providers: [],
})
export class CategoryRouting {}