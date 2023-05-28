import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { CompraDto } from '../modelo/compra-dto';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private userUrl = "http://localhost:8080/api/compra";

  constructor(private http: HttpClient) { }

  public crearCompra(compra: CompraDto): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/crear`, compra);
  }

  public obtenerCompra(codigoCompra: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/obtener/${codigoCompra}`);
  }
}
