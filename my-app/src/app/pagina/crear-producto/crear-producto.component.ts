import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {

  esEdicion: boolean;
  producto: ProductoDTO;
  categorias: string[];
  archivos!: FileList;
  isDropdownOpen: boolean = false;
  categoriaSeleccionada: { [categoria: string]: boolean } = {};
  codigoProducto!:number;

  constructor(private route:ActivatedRoute, private productoService:ProductoService) {
    this.esEdicion = false;
    this.categorias = [];
    this.cargarCategorias();
    this.route.params.subscribe(params => {
      this.codigoProducto = params["codigo"];
      let objetoProducto = this.productoService.obtener(this.codigoProducto);
      if(objetoProducto != null){
        this.producto = objetoProducto;
        this.esEdicion = true;
      }
    });
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
