import {Component, OnInit} from '@angular/core'
import { style } from '@angular/core/src/animation/dsl';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Category } from './../category';
import { CategoryService } from './../category.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'category-form',
    templateUrl: './category-form.componente.html',
    styleUrls: ['./category-form.componente.css']
})
export class CategoryFormComponent implements OnInit {
formCategory: FormGroup;
category: Category;

    constructor(
        private router: Router,
        private categoryService : CategoryService,
        private route: ActivatedRoute,
        private builder: FormBuilder,

    ){}

    ngOnInit() {

    let category: Category = new Category();
    category.id = this.route.snapshot.params['id'];


        this.formCategory = this.builder.group({
            id:[],
            nome:['',[Validators.required, Validators.maxLength(50)]],
        }, {})

        this.route.params.forEach((params:Params)=>{
            let id: number =+params['id'];
        })

        if(category.id != null){
            this.categoryService.findOne(id)
            .subscribe(category => {
                this.formCategory.patchValue(category);
            })
        }
    }

    salvar(category: Category){

        if(category.id == null){
            this.categoryService.save(category).subscribe(data=> {
                this.router.navigate(['/category/list']);
            })
        }else{
            this.categoryService.update(category).subscribe(
                () => this.router.navigate(['/category/list'])
            )
        }

     //     this.categoryService.save(category).subscribe(response =>{

     //     }); 
    }

    private handleError(err: any): Promise<any>{
        return Promise.reject(err.message || err)
    }
}