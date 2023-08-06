import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '../interface/Iarticulo';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  constructor(private http: HttpClient) {
  }

  public Carrito:Articulo[]=[];

  public async quitarProducto(idProducto: number) {
    return await this.http.post("/carrito/eliminar", {
      id: idProducto,
    });
  }

  public async agregarAlCarrito(idProducto: number) {
    return await this.http.post("/carrito/agregar", {
      id: idProducto,
    });
  }

  public async existeEnCarrito(idProducto: number) {
    return await this.http.post("/carrito/existe", {
      id: idProducto,
    });
  }

   obtenerProductos() {
    return  this.http.get("/carrito");
  }

  async terminarCompra(datosCliente: any) {
    return await this.http.post("/compra", datosCliente);
  }

  }

