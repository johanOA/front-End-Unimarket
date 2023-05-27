import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ProductoGetDTO } from '../../modelo/producto-get-dto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  textoBusqueda:String;
  productos:ProductoGetDTO[];
  filtro:ProductoGetDTO[];

  constructor(private route:ActivatedRoute, private router:Router,
    private productoService:ProductoService ) {
    this.productos = this.productoService.listar();
    this.filtro = [];
    this.textoBusqueda = "";

    this.route.params.subscribe(params =>{
      this.textoBusqueda = params['texto'];
      this.filtro = this.productos.filter( p =>
        p.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) );
      console.log(this.textoBusqueda);
    });
  }

  public iraBusqueda(valor:string){
    if(valor){
      this.router.navigate(["/busqueda", valor]);
    }
  }
}
