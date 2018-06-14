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

  carrinho: any[]
  valorTotal: number=0;
  tamanho: number =0;
  carrinhoNew:Carrinho;
  private carrinhoService:CarrinhoService;

   constructor(
     carrinhoService: CarrinhoService,
    public appComponent: AppComponent,
  ) {}

  ngOnInit() {

    this.carrinho = localStorage.getItem("carrinho") ?
      JSON.parse(localStorage.getItem("carrinho")) :
      [];
    this.tamanho = JSON.parse(localStorage.getItem("carrinho")).length;

  }

  excluirItem(index){
    this.carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(this.carrinho ));
    this.appComponent.aTT();
    alert("Deseja excluir?");
    location.reload();
  }

  //   getCalc(num, num2) {
  //     return this.carrinhoService.calculaQuadrado(num,num2);
  // }

  getCalc(num) {
    this.valorTotal = this.tamanho *num;
    return this.tamanho *num;
}

}
