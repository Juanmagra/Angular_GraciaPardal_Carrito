import { Component, OnInit } from '@angular/core';
import {Articulo} from '../../models/Articulo';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  listaArticulos:Array<Articulo>;

  total:number;

  constructor() { }

  ngOnInit(): void {

    this.listaArticulos=[
      new Articulo(0,"https://vimodatoledo.es/wp-content/uploads/2018/10/Botas-de-lluvia-altas-Hunter-original-verdes.jpg",
      "Botas altas", "Perfectas para la lluvia", "marron", 38,false,90,50),

      new Articulo(1,"https://www.starliteshop.com/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/2/0/2019060606105613096_1.jpg",
      "Chaqueta vaquera", "A la ultima", "azul", 42, true, 200,20),

      new Articulo(2,"https://www.adepromo.com/9292-large_default/gorro-lana.jpg",
      "Gorro de lana", "Manten la cabeza caliente", "negro", 10, false, 15,0),
    ];

    this.total = 0;

    this.listaArticulos.forEach(art =>{
      var precio:number;
      if(art.rebaja){
      precio= art.precioRebaja
      }else{
        precio=art.precio;
      }
      this.total += precio;
    });
  }

  


}
