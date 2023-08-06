import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarArticulosComponent } from './articulos/listar-articulos/listar-articulos.component';
import { ListaClienteComponent } from './Clientes/lista-cliente/lista-cliente.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './admin/guard/guard.component';
import { ArticuloClienteComponent } from './Crud/articulo-cliente/articulo-cliente.component';
import { TiendaComponent } from './tienda/tienda/tienda.component';
import { DetalleComponent } from './tienda/detalle/detalle.component';
import { SucursalComponent } from './Crud/sucursal/sucursal.component';


const routes: Routes = [
  { path: 'articulos', pathMatch: 'full', component:ListarArticulosComponent},
  { path: 'clientes', pathMatch: 'full',  component:ListaClienteComponent,canActivate:[AuthGuard]},
  { path: 'ventas', pathMatch: 'full', component:ArticuloClienteComponent},
  { path: 'tienda', pathMatch: 'full', component:SucursalComponent},
  { path: 'login', pathMatch: 'full', component:LoginComponent},
  { path: 'detalle/:id', pathMatch: 'full', component:DetalleComponent},
  { path: 'compra', pathMatch: 'full', component:TiendaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
