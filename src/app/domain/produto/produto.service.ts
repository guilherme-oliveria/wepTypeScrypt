import { Produto } from "./produto";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProdutoService {

  private produtoList: Produto[] = [];
  constructor(private http: Http) { }

  public API_URL: string = 'http://127.0.0.1:8181/api';

  save(produto: Produto): Observable<Produto[]> {

    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })

    const body = JSON.stringify(produto);
    
    if(produto.id){
      return this.http
          .put(`${this.API_URL}/produto/`, body, options)
          .map(res => res.json().content);
    } else {

      return this.http.post(`${this.API_URL}/produto/`, body, options)
        .map(response => response.json().content);
        
    }
  }

  update(produto: Produto): Observable<Produto[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers })

    const body = JSON.stringify(produto);

    return this.http.put(`${this.API_URL}/produto/${produto.id}`, body, options)
      .map(response => response.json().content);
  }

  findOne(id:number): Observable<Produto[]>{
    return this.http
    .get(`${this.API_URL}/produto/${id}`)
    .map(response => response.json().content);
  }

  findAll(): Observable<Produto[]>{
    return this.http
      .get(`${this.API_URL}/produto`).map(response => response.json().content);

  }

  delete(id: number): Observable<boolean> {
    return this.http
      .delete(`${this.API_URL}/produto/${id}`)
      .map(response => response.json().content);
  }

}