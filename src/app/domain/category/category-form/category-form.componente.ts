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


    constructor(
        private router: Router,
        private categoryService : CategoryService,
        private route: ActivatedRoute,
        private builder: FormBuilder,

    ){}

    ngOnInit() {
        
        this.formCategory = this.builder.group({
            id: [],
            nome: ['', [Validators.required]],
        }, {})

        let category: Category = new Category();
        category.id = this.route.snapshot.params['id'];


  

        // this.route.params.forEach((params:Params)=>{
        //     let id: number =+params['id'];
        // })

        if(category.id != null){
            this.categoryService.findOne(category.id)
            .subscribe(category => {
                this.formCategory.patchValue(category);
            })
        }
    }

    compareFn(c1: Category, c2: Category): boolean{
        return c1 && c2 ? c1.id === c2.id : c1 ===c2;
    }
    salvar(category: Category){

        if(category.id == null){
            this.categoryService.save(category).subscribe(response => {
                this.router.navigate(['/category/list']);
            })
        }else{
            this.categoryService.update(category).subscribe(
                response => {
                    this.router.navigate(['/category/list'])
                })
        }

     //     this.categoryService.save(category).subscribe(response =>{

     //     }); 
    }

    private handleError(err: any): Promise<any>{
        return Promise.reject(err.message || err)
    }
}