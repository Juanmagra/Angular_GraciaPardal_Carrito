export class Articulo{

    id:number;
    foto:string;
    nombre:string;
    descripcion:string;
    color:string;
    talla:number;
    rebaja:boolean;
    precio:number;
    cantidadRebaja: number;
    precioRebaja: number;
    

    constructor(id:number, foto:string,  nombre:string, descripcion:string,
    color:string, talla:number,rebaja:boolean, precio:number,
    cantidadRebaja:number){
        this.id = id;
        this.foto = foto;
        this.nombre = nombre;
        this.descripcion =descripcion;
        this.color = color;
        this.talla = talla;
        this.rebaja = rebaja;
        this.precio = precio;
        this.cantidadRebaja = cantidadRebaja;
        if(rebaja==true){
            this.precioRebaja = precio - (precio*cantidadRebaja/100);
        }else{
            this.precioRebaja = 0;
        }

    }

}