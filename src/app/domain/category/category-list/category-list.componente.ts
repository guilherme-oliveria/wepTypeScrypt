import {Component, OnInit} from '@angular/core'
import { style } from '@angular/core/src/animation/dsl';
import { CategoryService } from './../category.service';
import { Category } from '../category';
@Component({
    selector: 'category-list',
    templateUrl: './category-list.componente.html',
    styleUrls: ['./category-list.componente.css']
})
export class CategoryListComponent implements OnInit {

    categories: Category[];

    constructor(private categoryService: CategoryService){}

    ngOnInit() {
        this.categoryService.findAll()
        .subscribe(categories => {
             this.categories = categories
        });
    }
      
    delete(id:number, index: number){
        this.categoryService.delete(id)
        .subscribe(response => {
            if(response == true){
                this.categories.splice(index, 1);
            }
        })
    }
}