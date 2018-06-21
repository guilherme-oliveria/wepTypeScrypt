import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';

import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeCompoment implements OnInit{
    produto: Produto[];
    produtoPromocao: Produto[];
    dtTrigger: Subject<Produto> = new Subject();

    constructor(
         public produtoService: ProdutoService,
         public appComponent: AppComponent,
    ){}

    ngOnInit(){
        this.produtoService.findSemPromocoes()
        .subscribe(produtos => {
          this.produto = produtos;
          console.log(this.produto);
        });

        this.produtoService.findPromocoes()
        .subscribe(produtos => {
          this.produtoPromocao = produtos;
          console.log(this.produtoPromocao);
        });
    }

    incluirProdutoNoCarrinho(produto) {
        let produtos = localStorage.getItem("produtos") ?
            JSON.parse(localStorage.getItem("produtos")) :
            [];

            let item = {
                produto: produto,
                index: produtos.length + 1,
                quantidade: 1,
                valorUnitario: 0
              }
              var teste = true;

              for (let i = 0; i < produtos.length; i++) {
                if (produtos[i].produto.id == item.produto.id) {
                  produtos[i].produto.preco =  produtos[i].produto.preco + item.produto.preco;
                  produtos[i].quantidade = produtos[i].quantidade + 1;
                  produtos[i].valorUnitario = produto.preco;
                  localStorage.setItem("produtos", JSON.stringify(produtos));
                  teste = false;
                }
              }

              if (teste) {
                produtos.push(item);
              }


        localStorage.setItem("produtos", JSON.stringify(produtos));
        this.appComponent.atualizaNumero();
    }
}
