import { Component, OnInit } from '@angular/core';
import { AuthServiceServiceService } from '../Servicios/auth-service-service.service';
import { Cliente } from '../interface/cliente';
import { CarritoService } from '../Servicios/carrito.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent  implements OnInit {
  isExpanded = false;
  producto:any;
  user?: Cliente | null;
  constructor(public accountService: CarritoService) {
   
  this.ActulizaCarrito()
}

ngOnInit(): void {
  this.ActulizaCarrito();
}
ActulizaCarrito(){
  

this.producto =this.accountService.Carrito;
}
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public total() {
    let total = 0;
    this.accountService.Carrito.forEach(p => total += p.precio);
    return total;
  }

}
