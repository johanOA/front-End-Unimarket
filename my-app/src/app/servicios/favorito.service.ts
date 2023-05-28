import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { FavoritoDto } from '../modelo/favorito-dto';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private userUrl = "http://localhost:8080/api/favoritos";

  constructor(private http: HttpClient) { }

  public listarFavoritosPorUsuario(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/${codigo}`);
  }

  public agregarFavorito(codigo: number, favorito: FavoritoDto): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/agregarFavorito/${codigo}`, favorito);
  }

  public eliminarFavorito(favorito: FavoritoDto): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/eliminarFavorito`, favorito);
  }
}