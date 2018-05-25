import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import {Produto} from '../produto/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private subscription : Subscription;

  carrinho: any[]
  tamanho: number =0;
   constructor(
    public appComponent: AppComponent,
  ) {}

  ngOnInit() {

    this.carrinho = localStorage.getItem("carrinho") ?
      JSON.parse(localStorage.getItem("carrinho")) :
      [];
    this.tamanho = JSON.parse(localStorage.getItem("carrinho")).length; 
  }
  
  excluirItem(index){
    this.carrinho .splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(this.carrinho ));
    this.appComponent.aTT();
    alert("Deseja excluir?");
  }

}
