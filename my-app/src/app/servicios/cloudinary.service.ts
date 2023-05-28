import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {
  private userUrl = "http://localhost:8080/api/imagenes";

  constructor(private http: HttpClient) { }

  public subirImagen(file: File): Observable<MensajeDTO> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<MensajeDTO>(`${this.userUrl}/subirImagen`, formData);
  }

  public eliminarImagen(idImagen: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminarImagen`, { body: idImagen });
  }
}
