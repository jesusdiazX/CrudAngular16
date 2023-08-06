import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/Servicios/carrito.service';
import { ServiceArticuloService } from 'src/app/Servicios/service-articulo.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  public producto:any;
  public fotoSeleccionada: string | undefined;
  public indiceSeleccionado = 0;
  public yaExiste!: boolean ;
  id:any;

  
  constructor(private carritoService:
    CarritoService ,
     private articuloService: ServiceArticuloService, 
     private activatedRoute: ActivatedRoute,
    ) {

  }
  
  public seleccionarImagen(indice:any) {
    this.indiceSeleccionado = indice;
    //this.fotoSeleccionada = this.producto.fotos[this.indiceSeleccionado].foto;
  }
  

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.paramMap.get("id");
    debugger
    this.articuloService.getArticuloId( this.id).subscribe({
      next:(rest)=>{
        console.log(rest);
      
        this.producto=rest;

      }
    });  

  }


  public async quitarDelCarrito() {
    const {id} = this.producto;
    const respuesta = await this.carritoService.quitarProducto(id);
    console.log({respuesta})
    this.refrescarEstado();
  }
  
  public async agregarAlCarrito() {
    const {id} = this.producto;
    
    this.carritoService.Carrito.push(this.producto);
    
  }

  async refrescarEstado() {
    const id = this.producto.id;
   
  }


}
