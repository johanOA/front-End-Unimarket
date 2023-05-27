import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { UsuarioDTO } from '../modelo/usuario-dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private userUrl = "http://localhost:8080/api/usuario";

  constructor(private http: HttpClient) { }

  public obtener(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/obtener/${codigo}`);
  }
  public eliminar(codigo: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${codigo}`)
  }
  public actualizar(codigo:number, usuario:UsuarioDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/actualizar/${codigo}`, usuario);
  }
}
