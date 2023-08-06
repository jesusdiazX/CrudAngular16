import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-targetaproducto',
  templateUrl: './targetaproducto.component.html',
  styleUrls: ['./targetaproducto.component.css']
})
export class TargetaproductoComponent implements OnInit {

  @Input() productos: any;
  constructor(private router: Router) {
    console.log(this.productos);
  }

  ngOnInit(): void {

    console.log(this.productos);
    debugger


  }

  public resolverRuta() {
    debugger
    const baseUrl = environment.UrlApi;
    debugger
    return "C:\\Users\\Jesusdiaz\\source\\repos\\APiServer\\APiServer\\Uploader\\Sm001.jpg";
    //return  `${baseUrl}/Uploader/${"Sm001.jpg"}`;
  }

  public detalles() {
   this.router.navigate(["/producto/detalle"])
  }

}
