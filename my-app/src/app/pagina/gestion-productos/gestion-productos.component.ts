import { Component, OnInit } from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {
  seleccionados: ProductoGetDTO[];
  textoBtnEliminar: string;
  productos: ProductoGetDTO[];
  mostrarModal: boolean;

  constructor(private productoService: ProductoService) {
    this.productos = [];
    this.seleccionados = [];
    this.textoBtnEliminar = '';
    this.mostrarModal = false;
  }

  public seleccionar(producto: ProductoGetDTO, estado: boolean) {
    if (estado) {
      this.seleccionados.push(producto);
    } else {
      this.seleccionados = this.seleccionados.filter(i => i != producto);
    }

    this.actualizarMensaje();
  }

  private actualizarMensaje() {
    const tam = this.seleccionados.length;

    if (tam != 0) {
      if (tam != 1) {
        this.textoBtnEliminar = "1 elemento";
      } else {
        this.textoBtnEliminar = tam + " elementos";
      }
    } else {
      this.textoBtnEliminar = "";
    }
  }

  public mostrarVentanaEmergente() {
    if (this.seleccionados.length > 0) {
      this.mostrarModal = true;
    }
  }

  public cerrarVentanaEmergente() {
    this.mostrarModal = false;
  }

  public confirmarEliminacion() {
    this.borrarProductos();
    this.cerrarVentanaEmergente();
  }

  public borrarProductos() {
    this.seleccionados.forEach(e => {
      this.productos = this.productos.filter(i => i != e);
    });

    this.seleccionados = [];
    this.actualizarMensaje();
  }

  ngOnInit(): void {
    this.productos = this.productoService.listar();
  }
}
