import {Category} from './category';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Categoria } from '../../categoria/categoria';
import { Http, RequestOptions } from '@angular/http';
import { Options } from 'selenium-webdriver/chrome';



@Injectable()
export class CategoryService{

    public API_URL: string = 'http://localhost:8181/api';

    private categoryList: Category[]=[];
    constructor(public http: Http){}

    findAll(): Observable<Category[]>{
        return this.http
            .get('${this.API_URL}/category')
            .map(res => res.json().content);

    }

    delete(id: number):Observable<boolean>{
        return this.http
            .delete('${this.API_URL}/category/${id}')
            .map(res => res.json().content);
      }  

      save(category: Category): Observable<Category>{

        let headers = new Headers({'Content.type': 'application/json'});
        let options = new RequestOptions

        if(category.id){
            return this.http
            .put('${this.API_URL}/category', JSON.stringify(category), options)
            .map(res => res.json().content);
        }else{
            return this.http
            .post('${this.API_URL}/category', JSON.stringify(category), options)
            .map(res => res.json().content);
        }
    }

    update(category: Category){
        let headers = new Headers({'Content-Type':'application/json'})
        let options = new RequestOptions({headers: headers})

        const body = JSON.stringify(category);
        return this.http.put('${this.API_URL}/category/${category.id}',body, options)

    }
}