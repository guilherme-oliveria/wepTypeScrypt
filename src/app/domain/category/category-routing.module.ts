import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/common';

import {CategoryListComponent} from './category-list/category-list.componente';

const CategoryRoutes: Routes = [
    {
        path:'', component : CategoryListComponent
    },
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild(CategoryRoutes) ],
    exports: [RouterModule],
    providers: [],
})
export class CategoryRouting {}