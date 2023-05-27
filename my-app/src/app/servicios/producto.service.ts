import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/producto-get-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos:ProductoGetDTO[];

  constructor() {
    this.productos = [];

    this.productos.push(new ProductoGetDTO(1, "HP", "Computador Gris", 1, 1200000, 0, 0,
    ["https://falabella.scene7.com/is/image/FalabellaCO/38290458_1?wid=800&hei=800&qlt=70"],
    ['TECNOLOGIA', 'HOGAR']));

    this.productos.push(new ProductoGetDTO(2, "Dell", "Computador Gris", 1, 1200000, 0, 0,
    ["https://falabella.scene7.com/is/image/FalabellaCO/38290458_1?wid=800&hei=800&qlt=70"],
    ['TECNOLOGIA', 'HOGAR']));

    this.productos.push(new ProductoGetDTO(3, "Lenovo", "Computador Gris", 1, 1200000, 0, 0,
    ["https://falabella.scene7.com/is/image/FalabellaCO/38290458_1?wid=800&hei=800&qlt=70"],
    ['TECNOLOGIA', 'HOGAR']));

    this.productos.push(new ProductoGetDTO(4, "Aser", "Computador Gris", 1, 1200000, 0, 0,
    ["https://falabella.scene7.com/is/image/FalabellaCO/38290458_1?wid=800&hei=800&qlt=70"],
    ['TECNOLOGIA', 'HOGAR']));

    this.productos.push(new ProductoGetDTO(5, "Asus", "Computador Gris", 1, 1200000, 0, 0,
    ["https://falabella.scene7.com/is/image/FalabellaCO/38290458_1?wid=800&hei=800&qlt=70"],
    ['TECNOLOGIA', 'HOGAR']));

    this.productos.push(new ProductoGetDTO(6, "Macs", "Computador Gris", 1, 1200000, 0, 0,
    ["https://falabella.scene7.com/is/image/FalabellaCO/38290458_1?wid=800&hei=800&qlt=70"],
    ['TECNOLOGIA', 'HOGAR']));
  }
  public listar():ProductoGetDTO[]{
    return this.productos;
  }
}
