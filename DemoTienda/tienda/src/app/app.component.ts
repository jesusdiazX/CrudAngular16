import { Component, OnInit } from '@angular/core';
import { CarritoService } from './Servicios/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda';

  public productos:any;

  constructor(private carritoService: CarritoService
  
     ) {}
    

      total() {
      // Quién te conoce reduce
      let total = 0;
      this.productos.forEach((p: { precio: number; }) => total += p.precio);
      return total;
    }
  

  ngOnInit(): void {
    this.refrescarCarrito();
  }
  refrescarCarrito() {
    this.productos =  this.carritoService.obtenerProductos();

}
}
