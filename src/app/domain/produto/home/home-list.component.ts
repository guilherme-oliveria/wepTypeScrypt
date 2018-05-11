import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
    selector: 'home-list',
    templateUrl: './home-list.component.html'
})

export class HomeListCompoment implements OnInit {
    produtos: Produto[]

    constructor(private service: ProdutoService) { }

    ngOnInit() {
        // this.service.findAll().subscribe(
        //     response => {
        //         this.produtos = [];
        //         response.forEach(element => {
        //             this.produtos.push(element);
        //         });
        //     }
        // );

        this.service.findAll()
        .subscribe(produtos => {
             this.produtos = produtos
        });
    }


    
}