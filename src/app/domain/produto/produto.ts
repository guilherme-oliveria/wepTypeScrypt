import { Category } from "../category/category";

export class Produto{
    id: number;
    nome: String;
    marca: string;
    preco: number;
    descricao:String;
    categoria: Category; 
}