import { ListaItem } from './lista-item.model';


export class Lista{

    id:number;
    titulo:string;
    creadaEn:Date;
    terminadaEn:Date;
    finalizada:boolean;
    items:ListaItem[];


    constructor(titulo:string){

        this.titulo=titulo;
        this.creadaEn= new Date();
        this.finalizada= false;
        this.items=[];

        this.id=new Date().getTime();
    }
}