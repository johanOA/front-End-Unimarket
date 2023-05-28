import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetallecompraDto } from '../modelo/detallecompra-dto';
import { CompraDto } from '../modelo/compra-dto';

@Injectable({
  providedIn: 'root'
})
export class DetalleCompraService {

  private userUrl = "http://localhost:8080/api/detalleCompra";

  constructor(private http: HttpClient) { }

  public listarPorCodigoProducto(codigo: number): Observable<DetallecompraDto[]> {
    const url = `${this.userUrl}/${codigo}`;
    return this.http.get<DetallecompraDto[]>(url);
  }

  public listarPorCompra(compra: CompraDto): Observable<DetallecompraDto[]> {
    const url = `${this.userUrl}/compras/${compra.codigoUsuario}`;
    return this.http.get<DetallecompraDto[]>(url);
  }
}
