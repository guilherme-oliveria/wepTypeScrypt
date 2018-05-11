import { Category } from "../category/category";

export class Produto{
    id: number;
    nome: string;
    marca: string;
    preco: number;
    descricao:string;
    category: Category; 
}