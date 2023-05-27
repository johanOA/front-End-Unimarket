export class ProductoGetDTO {
  codigo:number = 0;
  nombre:string = "";
  descripcion:string = "";
  unidades:number = 0;
  precio:number = 0;
  calificacion:number = 0;
  codigoVendedor:number = 0;
  imagen: string[] = [];
  categoria: string[] = [];

  constructor(
    codigo: number,
    nombre: string,
    descripcion: string,
    unidades: number,
    precio: number,
    calificacion: number,
    codigoVendedor: number,
    imagen: string[],
    categoria: string[]
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.unidades = unidades;
    this.precio = precio;
    this.calificacion = calificacion;
    this.codigoVendedor = codigoVendedor;
    this.imagen = imagen;
    this.categoria = categoria;
  }

}
