import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import {Produto} from '../produto/produto';
import {CarrinhoService} from '../carrinho/carrinho.service';
import { Carrinho } from "./carrinho";

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private subscription : Subscription;
  produto:Produto;
  produtos: any[];
  valorTotal: number=0;
  tamanho:number=0;
  total:number=0;
  private carrinhoService:CarrinhoService;

   constructor(
     carrinhoService: CarrinhoService,
    public appComponent: AppComponent,
  ) {}

  ngOnInit() {

      this.precoTotal();
      this.produtos = localStorage.getItem("produtos") ?
      JSON.parse(localStorage.getItem("produtos")) :
      [];
  }

  excluirItem(index){
    this.produtos.splice(index, 1);
    localStorage.setItem("produtos", JSON.stringify(this.produtos ));
    this.appComponent.atualizaNumero();
    alert("Deseja excluir?");
    location.reload();
  }


  getTam(num2){
    this.tamanho =num2;
  }
  //   getCalc(num, num2) {
  //     return this.carrinhoService.calculaQuadrado(num,num2);
  // }

  atualizandoItem(produto, valor) {
    let produtos = localStorage.getItem("produtos") ?
      JSON.parse(localStorage.getItem("produtos")) :
      [];

    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].produto.id == produto.id) {
        if (produtos[i].quantidade > 1 || valor == 1) {
          if (valor == 0) {
            produtos[i].produto.preco = produtos[i].produto.preco - (produtos[i].produto.preco / produtos[i].quantidade);
            produtos[i].quantidade = produtos[i].quantidade - 1;
          } else {
            produtos[i].produto.preco = produtos[i].produto.preco + (produtos[i].produto.preco / produtos[i].quantidade);
            produtos[i].quantidade = produtos[i].quantidade + 1;
          }
          localStorage.setItem("produtos", JSON.stringify(produtos));
        } else {
          break;
        }
      }
    }
    this.appComponent.atualizaNumero();
    this.precoTotal();
    location.reload();
  }

  precoTotal() {
    let produtos = localStorage.getItem("produtos") ?
      JSON.parse(localStorage.getItem("produtos")) :
      [];

    let valorTotalAux = 0;

    for (let i = 0; i < produtos.length; i++) {
      valorTotalAux = valorTotalAux + produtos[i].produto.preco;
    }

    this.valorTotal = valorTotalAux;
  }


}
