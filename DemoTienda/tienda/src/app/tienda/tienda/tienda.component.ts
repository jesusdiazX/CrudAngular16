import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceArticuloService } from 'src/app/Servicios/service-articulo.service';
import { Articulo } from 'src/app/interface/Iarticulo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos:Articulo [] =[];
  constructor(private productosService: ServiceArticuloService,private router: Router
    
    ) {
  }
   ngOnInit() {

    this.productosService.getArticulos().subscribe({
      next:(rest)=>{
        console.log(rest);

        this.productos=rest;

       //  var imgSrc = String.Format("data:image/gif;base64,{0}", Model.Imagen64);
       
        
  
      }
    }); 
   
  }

  public resolverRuta() {
    debugger
    const baseUrl = environment.UrlApi;
    debugger
    return "C:\\Users\\Jesusdiaz\\source\\repos\\APiServer\\APiServer\\Uploader\\Sm001.jpg";
    //return  `${baseUrl}/Uploader/${"Sm001.jpg"}`;
  }

  public detalles(articuloId:any) {
    this.router.navigate(["/detalle",articuloId])
  }

}
