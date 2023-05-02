  import { NgModule } from '@angular/core';
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
      FavoritosComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
