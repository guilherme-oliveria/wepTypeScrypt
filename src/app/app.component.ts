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
    this.atualizaNumero();
    let prod = JSON.parse(localStorage.getItem("produtos")).length ;
    this.tamanho = prod;
  }
  atualizaNumero(){
    let produtos = localStorage.getItem("produtos") ?
      JSON.parse(localStorage.getItem("produtos")) :
      [];

    let quantidadeDeProdutos = 0;

    for (let i = 0; i < produtos.length; i++) {
      quantidadeDeProdutos = quantidadeDeProdutos + produtos[i].quantidade; 
    }

    this.tamanho = quantidadeDeProdutos;
  }
}
