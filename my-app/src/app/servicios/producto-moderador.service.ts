import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoModeradorService {

  private userUrl = "http://localhost:8080/api/productoModerador";

  constructor(private http: HttpClient) { }

  public listarProductosPorModerador(idUsuario: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listarProductosPorModerador/${idUsuario}`);
  }
}
