import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CarroComponent } from './pagina/carro/carro.component';
import { NotFoundComponent } from './pagina/not-found/not-found.component';
import { SearchComponent } from './pagina/search/search.component';
import { ProfileComponent } from './pagina/profile/profile.component';
import { FavoritosComponent } from './pagina/favoritos/favoritos.component';
import { NotificacionesComponent } from './pagina/notificaciones/notificaciones.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './pagina/listar-productos/listar-productos.component';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { AboutComponent } from './pagina/about/about.component';
import { ProductsComponent } from './pagina/products/products.component';
import { ContactComponent } from './pagina/contact/contact.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';

  @NgModule({
    declarations: [
      AppComponent,
      InicioComponent,
      LoginComponent,
      RegistroComponent,
      CarroComponent,
      NotFoundComponent,
      SearchComponent,
      ProfileComponent,
      FavoritosComponent,
      NotificacionesComponent,
      CrearProductoComponent,
      ListarProductosComponent,
      AlertaComponent,
      AboutComponent,
      ProductsComponent,
      ContactComponent,
      GestionProductosComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
