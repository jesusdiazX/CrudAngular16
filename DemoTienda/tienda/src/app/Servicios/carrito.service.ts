import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '../interface/Iarticulo';
import { venta } from '../interface/RelacionCliente';
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  constructor(private http: HttpClient
    
    ) {
  }

  public Carrito:Articulo[]=[];

  Postventa( vents:venta){
    debugger
    let headers = new HttpHeaders().set("Content-Type", "application/json");
      return this.http.post<venta>(environment.UrlApi +'Ventas/PostVenta',vents,{headers: headers });
  
    }


  }

