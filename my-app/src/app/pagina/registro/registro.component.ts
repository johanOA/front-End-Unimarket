import { Component } from '@angular/core';
import { UsuarioDTO } from 'src/app/modelo/usuario-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario:UsuarioDTO
  constructor(){
    this.usuario = new UsuarioDTO;
  }
  public registrar(){
    console.log(this.usuario);
  }
  public sonIguales():boolean{
    return this.usuario.password == this.usuario.repeatPass;
  }
}
