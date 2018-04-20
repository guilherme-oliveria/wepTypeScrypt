import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Component

import { CategoryListComponent } from './category-list/category-list.componente';
import { CategoryViewCompoment } from './category-view/category-view.componente';

import { CategoryFormComponent } from './category-form/category-form.componente';
//routing 
import {CategoryRouting} from './category-routing.module';

//Service
import {CategoryService} from './category.service';

@NgModule({
    declarations: [
        //Componentes
        CategoryListComponent,
        CategoryFormComponent,
        CategoryViewCompoment

    ],
    imports: [
  // angular
      HttpModule,
      RouterModule,
      CommonModule,

      FormsModule,
      ReactiveFormsModule,

      // Routing
      CategoryRouting
    ],
    
    providers: [
      // services
      CategoryService
    ]
  })
  export class CategoryModule { }