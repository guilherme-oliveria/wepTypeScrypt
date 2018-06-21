import { Category } from "../category/category";

export class Produto{
    id: number;
    nome: string;
    marca: string;
    preco: number;
    precoPromocao: number;
    ativarPromocao:boolean = false;
    descricao:string;
    category: Category;


}
