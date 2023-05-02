import { Component } from '@angular/core';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent {
  items: any[] = [
    { name: 'Producto 1', price: 10, quantity: 1 },
    { name: 'Producto 2', price: 20, quantity: 2 },
    { name: 'Producto 3', price: 30, quantity: 3 }
  ];

  total: number = 0;

  constructor() {
    this.calculateTotal();
  }

  addItem(item: any) {
    this.items.push(item);
    this.calculateTotal();
  }

  removeItem(item: any) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.calculateTotal();
    }
  }

  calculateTotal() {
    this.total = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  checkout() {
    // Lógica para finalizar la compra y vaciar el carrito
  }
}

