import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
      ListarProductosComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
