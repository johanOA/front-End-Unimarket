import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private router:Router) {
    
  }
  
  public iraBusqueda(valor:string){
    if(valor){
      this.router.navigate(["/busqueda", valor]);
    }
  }
}
