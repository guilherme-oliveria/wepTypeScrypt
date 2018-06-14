import {Produto} from '../produto/produto';

export interface Carrinho {
    id:number;
    ativo: boolean;
    quantidade: number;
    produtos : Produto[];

}
