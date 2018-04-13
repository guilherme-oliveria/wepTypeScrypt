import {Component, OnInit} from '@angular/core'
import { style } from '@angular/core/src/animation/dsl';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Category } from './../category';
import { CategoryService } from './../category.service';

@Component({
    selector: 'category-form',
    templateUrl: './category-form.componente.html',
    styleUrls: ['./category-form.componente.css']
})
export class CategoryFormComponent implements OnInit {
    constructor(){}

    ngOnInit() {}
}