import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { ComentarioDto } from '../modelo/comentario-dto';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private userUrl = "http://localhost:8080/api/comentario";

  constructor(private http: HttpClient) { }

  public crearComentario(comentario: ComentarioDto): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/crear`, comentario);
  }

  public actualizarComentario(codigoProducto: number, comentario: ComentarioDto): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/actualizar/${codigoProducto}`, comentario);
  }

  public eliminarComentario(codigoComentario: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${codigoComentario}`);
  }

  public obtenerComentario(codigoProducto: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/obtener/${codigoProducto}`);
  }

  public listarComentarios(codigoProducto: number): Observable<any> {
    return this.http.get<any>(`${this.userUrl}/comentarios/${codigoProducto}`);
  }
}
