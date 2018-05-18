import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../category.service';
import { Category } from './../category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'category-view',
    templateUrl: './category-view.componente.html',
    styleUrls: ['./category-view.componente.css']
})

export class CategoryViewCompoment implements OnInit{
    form : FormGroup;
    category : Category;


    constructor(
        private categoryService: CategoryService,
        private router: Router,
        private route: ActivatedRoute,
        private builder: FormBuilder,
    ){}
    ngOnInit(){
        this.category= new Category();

      this.form = this.builder.group({
          id:[],
          nome:['', [Validators.required]]
      },{})

      this.form.disable();

      if(this.category.id != null){
          this.categoryService.findOne(this.category.id)
          .subscribe(category => {
              this.form = this.builder.group(category,{});
          });
      }

    }
}