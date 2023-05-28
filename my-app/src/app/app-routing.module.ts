import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CarroComponent } from './pagina/carro/carro.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { AboutComponent } from './pagina/about/about.component';
import { ProductsComponent } from './pagina/products/products.component';
import { SearchComponent } from './pagina/search/search.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "carro", component: CarroComponent},
  { path: "crear-producto", component: CrearProductoComponent } ,
  { path: "about", component: AboutComponent },
  { path: "products", component: ProductsComponent },
  { path: "busqueda/:texto", component: SearchComponent },
  { path: "account", component: GestionProductosComponent },
  { path: "editar-producto/:codigo", component:CrearProductoComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
