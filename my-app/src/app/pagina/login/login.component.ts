// import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { UsuarioDTO } from 'src/app/modelo/usuario-dto';
import { AuthService } from '../../servicios/auth.service';
import { Alerta } from 'src/app/modelo/alerta';
import { SesionDTO } from 'src/app/modelo/sesion-dto';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:UsuarioDTO;
  sesion:SesionDTO;
  private sign_in_btn!: HTMLElement | null;
  private sign_up_btn!: HTMLElement | null;
  private container!: HTMLElement | null;

  constructor(private renderer: Renderer2) {
    this.usuario = new UsuarioDTO;
    this.sesion = new SesionDTO;
   }

  public login(){
    console.log(this.sesion)
  }

  public registrar(){
    console.log(this.usuario)
  }

  public sonIguales():boolean{
    return this.usuario.password == this.usuario.repeatPass;
  }

  ngOnInit() {
    this.sign_in_btn = document.querySelector("#sign-in-btn");
    this.sign_up_btn = document.querySelector("#sign-up-btn");
    this.container = document.querySelector(".container");

    if (this.sign_up_btn && this.container) {
      this.sign_up_btn.addEventListener('click', () => {
        this.renderer.addClass(this.container!, "sign-up-mode");
      });
    }

    if (this.sign_in_btn && this.container) {
      this.sign_in_btn.addEventListener('click', () => {
        this.renderer.removeClass(this.container!, "sign-up-mode");
      });
    }
  }
}


