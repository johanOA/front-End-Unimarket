import { Component } from '@angular/core';
import { ProductoDTO } from 'src/app/modelo/producto-dto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {

  producto: ProductoDTO;
  categorias: string[];
  archivos!: FileList;
  isDropdownOpen: boolean = false;
  categoriaSeleccionada: { [categoria: string]: boolean } = {};

  constructor() {
    this.categorias = [];
    this.cargarCategorias();
    this.producto = new ProductoDTO();
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
    }
  }

  public crearProducto() {
    if (this.archivos != null && this.archivos.length > 0) {
      console.log(this.producto);
    } else {
      console.log('Debe seleccionar al menos una imagen');
    }
  }

  private cargarCategorias() {
    this.categorias.push('TECNOLOGIA');
    this.categorias.push('DEPORTE');
    this.categorias.push('HOGAR');
    this.categorias.push('HERRAMIENTAS');
    this.categorias.push('AUTOMOVILES');
    this.categorias.push('INSTRUMENTOS');
    this.categorias.push('LIBROS');
    this.categorias.push('RELOJES');
    this.categorias.push('SALUD');
    this.categorias.push('');
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onCategoriaChange() {
    this.producto.categoria = Object.keys(this.categoriaSeleccionada).filter(
      categoria => this.categoriaSeleccionada[categoria]
    );
  }
}
