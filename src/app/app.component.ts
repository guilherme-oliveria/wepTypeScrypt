import { Component } from '@angular/core';
import { Carrinho } from './domain/carrinho/carrinho';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tamanho:number = 0;

  constructor(){}

  ngOnInit() {
    this.aTT();
  }

  aTT(){
    let prod = JSON.parse(localStorage.getItem("produtos")).length ;
    this.tamanho = prod;
  }
}
