import { Component, OnInit } from '@angular/core';
import { TokenService } from './servicios/token.service';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
[x: string]: any;
title = 'Unimarket';
isLogged = false;
email:string = "";
constructor(private tokenService:TokenService) { }

ngOnInit(): void {
    const objeto = this;
    this['sesionService'].currentMessage.subscribe({
    next: (data: boolean) => {
    objeto.actualizarSesion(data);
    }
    });
    this.actualizarSesion(this.tokenService.isLogged());
    }
public logout(){
this.tokenService.logout();
}

private actualizarSesion(estado: boolean) {
    this.isLogged = estado;
    if (estado) {
    this.email = this.tokenService.getEmail();
    }else{
        this.email = "";
}
}

}