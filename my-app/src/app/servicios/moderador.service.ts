import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class ModeradorService {

  constructor(private http: HttpClient) { }

  private userUrl = "http://localhost:8080/api/moderador";

  public aprobarProducto(codigoProducto: number): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/aprobarProducto/${codigoProducto}`, {});
  }

  public rechazarProducto(codigoProducto: number): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/rechazarProducto/${codigoProducto}`, {} );
  }
}
