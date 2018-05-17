import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
    selector: 'home',
    templateUrl: './home-list.component.html',
    styleUrls: ['./home-list.component.css']
})

export class HomeListCompoment implements OnInit{
    produto: Produto[];
    constructor(
         public produtoService: ProdutoService,
    ){}
    ngOnInit(){
        this.produtoService.findAll()
        .subscribe(produtos => {
          this.produto = produtos;
          console.log(this.produto);
        });
    }
}
